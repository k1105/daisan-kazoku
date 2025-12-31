import {useCallback, useEffect, useRef, useState, useMemo} from "react";
import styles from "./TopBackgroundAnimation.module.scss";

// ==========================================
// Types
// ==========================================

interface TopBackgroundAnimationProps {
  onSectionVisible?: (sectionIndex: number) => void;
}

interface WindowWithTrigger extends Window {
  triggerBackgroundAnimation?: (sectionIndex: number) => void;
}

// ==========================================
// Configuration
// ==========================================

const HAND_ANIMATION_PATH = "/json/251231_hand_1515_1323.json";

const ANIMATION_FILES = {
  pc: [
    "/json/pc/phase_01_1920_1080_3s.json",
    "/json/pc/phase_02_1920_1080_3s.json",
    "/json/pc/phase_03_1920_1080_3s.json",
    "/json/pc/phase_04_1920_1080_3s.json",
    HAND_ANIMATION_PATH, // Index 4: Hand Animation
  ],
  sp: [
    "/json/sp/phase_01_SP_1080_1920_v002.json",
    "/json/sp/phase_02_SP_1080_1920_v002.json",
    "/json/sp/phase_03_SP_1080_1920_v002.json",
    "/json/sp/phase_04_SP_1080_1920_v002.json",
    HAND_ANIMATION_PATH, // Index 4
  ],
};

const HAND_PHASE_INDEX = 4;

// ==========================================
// Component
// ==========================================

export const TopBackgroundAnimation = ({
  onSectionVisible,
}: TopBackgroundAnimationProps) => {
  // 初期値は0でサーバーサイドレンダリング時のエラーを防ぐ
  const [innerSize, setInnerSize] = useState<{w: number; h: number}>({
    w: 0,
    h: 0,
  });

  const [targetPhase, setTargetPhase] = useState<number>(-1);
  const [isWhiteout, setIsWhiteout] = useState<boolean>(false);
  const animationContainers = useRef<(HTMLDivElement | null)[]>([]);
  const animationInstances = useRef<any[]>([]);
  const currentLoadingPhaseRef = useRef<number>(-1);

  const totalPhases = ANIMATION_FILES.pc.length;
  const phaseIndices = useMemo(
    () => Array.from({length: totalPhases}, (_, i) => i),
    [totalPhases]
  );

  // アニメーション再生関数
  const playAnimation = useCallback(
    async (phase: number) => {
      if (phase < 0 || phase >= totalPhases) return;
      if (typeof window === "undefined") return; // ガードを追加

      if (animationInstances.current[phase]) {
        return;
      }

      currentLoadingPhaseRef.current = phase;
      console.log(`🎬 Requesting phase ${phase}`);

      // ここは非同期処理内かつクリック/イベント後の実行なので window アクセスは安全
      const isPC = window.innerWidth > 600;
      const filePath = isPC
        ? ANIMATION_FILES.pc[phase]
        : ANIMATION_FILES.sp[phase];

      try {
        const lottie = await import("lottie-web");
        const container = animationContainers.current[phase];
        if (!container) return;

        const anim = lottie.default.loadAnimation({
          container: container,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: filePath,
        });

        animationInstances.current[phase] = anim;

        anim.addEventListener("complete", () => {
          anim.pause();
        });
      } catch (error) {
        console.error("Lottie load failed", error);
      }
    },
    [totalPhases]
  );

  // ウィンドウサイズ監視 (クライアントサイズのみで実行)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setInnerSize({w: window.innerWidth, h: window.innerHeight});
    };
    handleResize(); // 初期実行
    window.addEventListener("resize", handleResize);

    const trigger = (index: number) => {
      setTargetPhase(index);
    };
    (window as WindowWithTrigger).triggerBackgroundAnimation = trigger;

    return () => {
      window.removeEventListener("resize", handleResize);
      delete (window as WindowWithTrigger).triggerBackgroundAnimation;
    };
  }, []);

  // SP版でボトム到達時にホワイトアウトを適用
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const isSP = window.innerWidth <= 600;
      if (!isSP) {
        setIsWhiteout(false);
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 下から50vhの位置を計算
      const thresholdVh = windowHeight * 0.5; // 50vh
      const thresholdPosition = documentHeight - windowHeight - thresholdVh;

      // 下から50vhの位置に到達したらホワイトアウト
      const isNearBottom = scrollY >= thresholdPosition;

      setIsWhiteout(isNearBottom);
    };

    handleScroll(); // 初期実行
    window.addEventListener("scroll", handleScroll, {passive: true});
    window.addEventListener("resize", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // targetPhaseが変わったらアニメーション実行
  useEffect(() => {
    if (targetPhase >= 0) {
      playAnimation(targetPhase);
      onSectionVisible?.(targetPhase);
    }
  }, [targetPhase, playAnimation, onSectionVisible]);

  const getBackgroundStyle = (isHand: boolean) => {
    // 1. Handの場合はスタイル計算不要
    if (isHand) return {};

    // 2. SSR時（innerSizeが0の時）は計算せずに空オブジェクトを返す
    if (innerSize.w === 0 || innerSize.h === 0) return {};

    // 3. windowではなくinnerSize stateを使用する
    const aspect = innerSize.w / innerSize.h;
    const isWide = aspect > 16 / 9;
    const isMobilePortrait = aspect < 9 / 16 && innerSize.w <= 600;

    if (innerSize.w <= 600) {
      // SP
      return {
        width: isMobilePortrait ? "100vh" : "178vw",
        height: isMobilePortrait ? "178vh" : "100vw",
      };
    } else {
      // PC
      return {
        width: isWide ? "100vw" : "178vh",
        height: isWide ? "178vw" : "100vh",
      };
    }
  };

  return (
    <div className={styles.animationWrapper}>
      {phaseIndices.map((phase) => {
        const isHand = phase === HAND_PHASE_INDEX;

        return (
          <div
            key={phase}
            ref={(el) => {
              animationContainers.current[phase] = el;
            }}
            // インラインスタイルで動的なサイズを適用
            style={getBackgroundStyle(isHand)}
            className={`
              ${styles.animationContainer} 
              ${styles[`phase${phase}`]}
              ${phase <= targetPhase ? styles.visible : styles.hidden} 
              ${isHand ? styles.isHand : styles.isBackground}
            `}
          />
        );
      })}
      {/* ホワイトアウトオーバーレイ */}
      <div
        className={`${styles.whiteoutOverlay} ${
          isWhiteout ? styles.whiteoutActive : ""
        }`}
      />
    </div>
  );
};
