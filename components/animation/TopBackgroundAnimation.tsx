import {useEffect, useRef, useState} from "react";

interface TopBackgroundAnimationProps {
  onSectionVisible?: (sectionIndex: number) => void;
}

export const TopBackgroundAnimation = ({
  onSectionVisible,
}: TopBackgroundAnimationProps) => {
  const [innerSize, setInnerSize] = useState<{w: number; h: number}>({
    w: 0,
    h: 0,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const animationContainers = useRef<(HTMLDivElement | null)[]>([]);
  const animationInstances = useRef<any[]>([]);
  const isAnimating = useRef<boolean>(false);

  // アニメーションファイルの設定
  const animationFiles = {
    pc: [
      "/json/pc/phase_01_1920_1080_3s.json",
      "/json/pc/phase_02_1920_1080_3s.json",
      "/json/pc/phase_03_1920_1080_3s.json",
      "/json/pc/phase_04_1920_1080_3s.json",
    ],
    sp: [
      "/json/sp/phase_01_SP_1080_1920_v002.json",
      "/json/sp/phase_02_SP_1080_1920_v002.json",
      "/json/sp/phase_03_SP_1080_1920_v002.json",
      "/json/sp/phase_04_SP_1080_1920_v002.json",
    ],
  };

  const playNextAnimation = async (phase: number) => {
    if (phase >= animationFiles.pc.length || isAnimating.current) return;

    console.log(`🎬 Starting animation phase ${phase + 1}`);
    isAnimating.current = true;
    const isPC = window.innerWidth > 600;
    const filePath = isPC ? animationFiles.pc[phase] : animationFiles.sp[phase];
    console.log(`📁 Loading file: ${filePath}`);

    try {
      const lottie = await import("lottie-web");

      // 各フェーズ用のコンテナを取得
      const container = animationContainers.current[phase];
      if (container) {
        const animationInstance = lottie.default.loadAnimation({
          container: container,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: filePath,
        });

        animationInstances.current.push(animationInstance);
        console.log(`✅ Animation phase ${phase + 1} loaded successfully`);

        // アニメーション完了時の処理
        animationInstance.addEventListener("complete", () => {
          console.log(`✅ Animation phase ${phase + 1} completed`);
          // エンドフレームでステイ
          animationInstance.pause();
          console.log(`⏸️ Animation phase ${phase + 1} paused at end frame`);

          isAnimating.current = false;

          // 外部への通知を削除 - 自動連続実行を防ぐ
        });

        // エラー時の処理
        animationInstance.addEventListener("error", () => {
          console.error(`❌ Animation phase ${phase + 1} failed to load`);
          isAnimating.current = false;
        });
      }
    } catch (error) {
      console.error("❌ Failed to load lottie animation:", error);
      isAnimating.current = false;
    }
  };

  // 外部からセクション表示をトリガーする関数
  const triggerAnimation = (sectionIndex: number) => {
    console.log(`🎯 Triggering animation for section ${sectionIndex}`);
    setCurrentPhase(sectionIndex);
  };

  useEffect(() => {
    setIsActive(true);
    // クライアントサイドのみで動作
    if (typeof window === "undefined") return;

    setInnerSize({w: window.innerWidth, h: window.innerHeight});

    // 自動開始を削除 - 外部からのトリガーのみで動作
    console.log(
      "🎬 Animation component initialized - waiting for external triggers"
    );
  }, []);

  // currentPhaseが変更されたら次のアニメーションを開始
  useEffect(() => {
    if (currentPhase >= 0) {
      // 0も含める
      console.log(`🔄 Phase changed to ${currentPhase}, starting animation`);
      playNextAnimation(currentPhase);
    }
  }, [currentPhase, playNextAnimation]);

  // クリーンアップ
  useEffect(() => {
    const instances = animationInstances.current;
    return () => {
      instances.forEach((instance) => {
        if (instance && typeof instance.destroy === "function") {
          instance.destroy();
        }
      });
    };
  }, []);

  // 外部からアクセス可能にする
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).triggerBackgroundAnimation = triggerAnimation;
    }
  }, []);

  return (
    <>
      <div className="animation-wrapper">
        {/* 各フェーズ用の独立したコンテナ */}
        {[0, 1, 2, 3].map((phase) => (
          <div
            key={phase}
            ref={(el) => {
              animationContainers.current[phase] = el;
            }}
            className={`animation-container phase-${phase} ${
              isActive && "active"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .animation-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -10;
          width: ${innerSize.w / innerSize.h > 16 / 9 ? "100vw" : "178vh"};
          height: ${innerSize.w / innerSize.h > 16 / 9 ? "178vw" : "100vh"};
        }

        .animation-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(1);
          transform-origin: center;
          transition: opacity 5s ease;
          opacity: 0;
        }

        .active {
          opacity: 1;
        }

        /* 各フェーズの重ね順を制御 */
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

        @media screen and (max-width: 600px) {
          .animation-container {
            width: ${innerSize.w / innerSize.h < 9 / 16 ? "100vh" : "178vw"};
            height: ${innerSize.w / innerSize.h < 9 / 16 ? "178vh" : "100vw"};
          }
        }
      `}</style>
    </>
  );
};
