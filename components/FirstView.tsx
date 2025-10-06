import Image from "next/image";
import Link from "next/link";
import {DownArrowAnimation} from "./animation/DownArrowAnimation";
import styles from "@/styles/components/FirstView.module.scss";

interface FirstViewProps {
  showArrow?: boolean;
}

export const FirstView = ({ showArrow = true }: FirstViewProps) => {
  return (
    <>
      <div className={`${styles.viewPort} ${styles.top}`} key="0">
        <p className={styles.copy}>
          <span className={styles.segment}>少年少女が</span>
          <span className={styles.segment}>生きたいと</span>
          <span className={styles.segment}>思える社会をつくる。</span>
        </p>

        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            fill
            priority
            style={{objectFit: "contain"}}
            alt="第３の家族"
          />
        </div>
        <p className={styles.subTitle}>Web・イベント・研究事業</p>

        {showArrow && (
          <div className={styles.animationWrapper}>
            <DownArrowAnimation />
          </div>
        )}
      </div>

      <div className={styles.pageLinkContainer}>
        <div className={styles.link}>
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
