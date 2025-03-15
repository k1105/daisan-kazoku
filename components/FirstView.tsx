import Image from "next/image";
import Link from "next/link";
import { DownArrowAnimation } from "./animation/DownArrowAnimation";
import styles from "@/styles/components/FirstView.module.scss";

export const FirstView = () => {
  return (
    <div className={`${styles.viewPort} ${styles.top}`} key="0">
      <p className={styles.subTitle}>Web・イベント・研究事業</p>
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          fill
          priority
          style={{ objectFit: "contain" }}
          alt="第３の家族"
        />
      </div>
      <div className={styles.link}>
        <Link href={"/about"} className={styles.pageLink}>
          第３の家族とは
        </Link>
        <Link href={"/service"} className={styles.pageLink}>
          事業内容
        </Link>
        <Link href={"/donation"} className={styles.pageLink}>
          寄付する
        </Link>
      </div>
      <div className={styles.animationWrapper}>
        <DownArrowAnimation />
      </div>
    </div>
  );
};
