import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {DownArrowAnimation} from "./animation/DownArrowAnimation";
import styles from "@/styles/components/FirstView.module.scss";

interface FirstViewProps {
  showArrow?: boolean;
  isBottomLayout?: boolean;
}

export const FirstView = ({
  showArrow = true,
  isBottomLayout = false,
}: FirstViewProps) => {
  const logoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isBottomLayout) return;

    import("lottie-web").then((lottie) => {
      if (logoContainer.current) {
        const animationInstance = lottie.default.loadAnimation({
          container: logoContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "/logo/251231_LOGO_1920_110_white_touka.json",
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
            viewBoxSize: "669 0 580 110",
          },
        });

        return () => {
          animationInstance.destroy();
        };
      }
    });
  }, [isBottomLayout]);

  return (
    <>
      <div
        className={`${styles.viewPort} ${styles.top} ${
          isBottomLayout ? styles.bottomLayout : ""
        }`}
        key="0"
      >
        <p className={styles.copy}>
          <span className={styles.segment}>「どうしようもない」</span>
          <span className={styles.segment}>を</span>
          <span className={styles.segment}>「大丈夫」に</span>
        </p>

        {isBottomLayout ? (
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              fill
              priority
              style={{objectFit: "contain"}}
              alt="第３の家族"
            />
          </div>
        ) : (
          <div className={styles.logo} ref={logoContainer} aria-label="第３の家族" />
        )}
        <p className={styles.subTitle}>認定NPO法人第3の家族</p>

        {showArrow && (
          <div className={styles.animationWrapper}>
            <DownArrowAnimation />
          </div>
        )}
      </div>

      <div
        className={`${styles.pageLinkContainer} ${
          isBottomLayout ? styles.bottomLayoutContainer : ""
        }`}
      >
        <div
          className={`${styles.link} ${
            isBottomLayout ? styles.bottomLayoutLink : ""
          }`}
        >
          <Link href={"/about"} className={styles.pageLink}>
            第３の家族とは
          </Link>
          <Link href={"/service"} className={styles.pageLink}>
            事業内容
          </Link>
          <a href={"/donation"} className={styles.pageLink}>
            寄付する
          </a>
        </div>
      </div>
    </>
  );
};
