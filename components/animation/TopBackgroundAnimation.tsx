// components/animation/TopBackgroundAnimation.tsx

import {useCallback, useEffect, useRef, useState, useMemo} from "react";

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

const HAND_ANIMATION_PATH = "/json/hand.json";

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
  const [innerSize, setInnerSize] = useState<{w: number; h: number}>({
    w: 0,
    h: 0,
  });

  // 現在到達しているフェーズ（これ以下の番号のアニメーションは全て表示する）
  const [targetPhase, setTargetPhase] = useState<number>(-1);

  const animationContainers = useRef<(HTMLDivElement | null)[]>([]);
  const animationInstances = useRef<any[]>([]); // lottie instances

  // 現在再生リクエスト中のフェーズを追跡
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

      // 既にインスタンスが存在する場合はロードしない
      if (animationInstances.current[phase]) {
        return;
      }

      currentLoadingPhaseRef.current = phase;
      console.log(`🎬 Requesting phase ${phase}`);

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
          // 【修正1】Handアニメーションも含め、すべてループさせない
          loop: false,
          autoplay: true,
          path: filePath,
        });

        animationInstances.current[phase] = anim;

        anim.addEventListener("complete", () => {
          // 【修正2】Handアニメーションも含め、全てのフェーズで最終フレームで停止
          anim.pause();
        });
      } catch (error) {
        console.error("Lottie load failed", error);
      }
    },
    [totalPhases]
  );

  // ウィンドウサイズ監視
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setInnerSize({w: window.innerWidth, h: window.innerHeight});
    };
    handleResize();
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

  // targetPhaseが変わったらアニメーション実行
  useEffect(() => {
    if (targetPhase >= 0) {
      playAnimation(targetPhase);
      onSectionVisible?.(targetPhase);
    }
  }, [targetPhase, playAnimation, onSectionVisible]);

  return (
    <>
      <div className="animation-wrapper">
        {phaseIndices.map((phase) => (
          <div
            key={phase}
            ref={(el) => {
              animationContainers.current[phase] = el;
            }}
            className={`
              animation-container 
              phase-${phase} 
              ${phase <= targetPhase ? "visible" : "hidden"} 
              ${phase === HAND_PHASE_INDEX ? "is-hand" : "is-background"}
            `}
          />
        ))}
      </div>

      <style jsx>{`
        .animation-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -10;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          pointer-events: none;
        }

        .animation-container {
          position: absolute;
          transition: opacity 0.5s ease-out;
        }

        .visible {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }

        /* 背景アニメーション (Phase 0-3) */
        .is-background {
          top: 0;
          left: 0;
          transform-origin: center;
          width: ${innerSize.w / innerSize.h > 16 / 9 ? "100vw" : "178vh"};
          height: ${innerSize.w / innerSize.h > 16 / 9 ? "178vw" : "100vh"};
        }

        @media screen and (max-width: 600px) {
          .is-background {
            width: ${innerSize.w / innerSize.h < 9 / 16 ? "100vh" : "178vw"};
            height: ${innerSize.w / innerSize.h < 9 / 16 ? "178vh" : "100vw"};
          }
        }

        /* Handアニメーション (Phase 4) - 位置とサイズの調整 */
        .is-hand {
          /* 垂直方向: 中央より少し下 (60%) に配置 */
          top: 70%;
          transform: translateY(-50%);

          /* 水平方向: 右端から5%ほど離す */
          right: -10%;
          left: auto;

          /* サイズ: 高さを基準にし、幅はアスペクト比維持で自動調整 */
          height: 70vh; /* 少し小さくして見切れを防ぐ */
          width: auto; /* 高さに合わせる */
          max-width: 90vw; /* スマホなどで幅がはみ出さないように */

          /* コンテナ内での配置 */
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        /* 【修正3】Lottieが生成するSVGがコンテナ内にきれいに収まるようにする */
        .is-hand :global(svg) {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* アスペクト比を維持して収める */
        }

        /* 重ね順 */
        .phase-0 {
          z-index: 1;
        }
        .phase-1 {
          z-index: 2;
        }
        .phase-2 {
          z-index: 3;
        }
        .phase-3 {
          z-index: 4;
        }
        .phase-4 {
          z-index: 100;
        }
      `}</style>
    </>
  );
};
