import { useEffect, useRef, useState } from "react";

export const DownArrowAnimation = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsActive(true);

    // 動的にlottie-webをインポート
    import("lottie-web").then((lottie) => {
      if (animationContainer.current) {
        const animationInstance = lottie.default.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/json/250225_icon_450x450.json",
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
          width: 100px;
          height: 100px;
          transform: scale(1);
          repeat: none;
          transform-origin: center;
          transition: opacity 5s ease;
          opacity: 0;
        }

        .active {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
