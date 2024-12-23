import { useEffect, useRef, useState } from "react";

export const TopBackgroundAnimation = () => {
  const [innerSize, setInnerSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsActive(true);
    // クライアントサイドのみで動作
    if (typeof window === "undefined") return;

    setInnerSize({ w: window.innerWidth, h: window.innerHeight });

    // 動的にlottie-webをインポート
    import("lottie-web").then((lottie) => {
      if (animationContainer.current) {
        const animationInstance = lottie.default.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          // path: "/json/241295_sp_kv_hand.json",
          path:
            window.innerWidth > 600
              ? "/json/241208_kv_line_1920_1080.json"
              : "/json/241208_kv_sp_line_1080_1920.json",
        });

        return () => {
          animationInstance.destroy(); // クリーンアップ
        };
      }
    });
  }, []);

  return (
    <>
      <div
        ref={animationContainer}
        className={`animation ${isActive && "active"}`}
      />
      <style jsx>{`
        .animation {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -10;
          width: ${innerSize.w / innerSize.h < 16 / 9 ? "100vw" : "178vw"};
          height: ${innerSize.w / innerSize.h < 16 / 9 ? "178vh" : "100vh"};
          transform: scale(1);
          transform-origin: center;
          transition: opacity 5s ease;
          opacity: 0;
        }

        .active {
          opacity: 1;
        }

        @media screen and (max-width: 600px) {
          .animation {
            width: ${innerSize.w / innerSize.h < 9 / 16 ? "100vw" : "178vw"};
            height: ${innerSize.w / innerSize.h < 9 / 16 ? "178vh" : "100vh"};
          }
        }
      `}</style>
    </>
  );
};
