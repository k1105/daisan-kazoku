import DepartmentCard from "./DepartmentCard";
import styles from "@/styles/About.module.scss";
import Link from "next/link";
import Image from "next/image";
const Organization = () => {
  return (
    <>
      {" "}
      <div className={styles.leftSideItem}>
        <h1 className={styles.headline}>組織体制</h1>
      </div>
      <div className={styles.rightSideItem}>
        <div className={styles.profileImageWrapper}>
          <Image
            src="/ogp.png"
            alt="第3の家族 プロフィール"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className={styles.profileContainer}>
          <p>代表</p>
          <div>
            <h2>奥村春香</h2>
            <p className={styles.description}>
              活動のきっかけは、大学3年生の時に家庭環境問題が原因で弟を自死で亡くしたことです。私の受験失敗を機に家庭が壊れ、親子喧嘩が絶えない中での出来事でした。1年間は何もできなかったのですが、もとからものづくりが好きだったので、家庭環境に悩む人のための掲示板を試しに作ってみたところ、想像以上に人が集まりました。「つくってくれてありがとう」という嬉しい言葉をもらう一方、集まる悩みの重大さを実感し「もっとやらなければ」と思い、新卒で入社したLINE株式会社を退職し、NPO法人第3の家族を立ち上げました。今は、自身の過去のために活動をやっているという気持ちはなく、はざまの少年少女たちと一緒に揺られながら、より良い状態をつくって行くことに没頭しています。
            </p>
            <Link href="/people/okumura" className={styles.innerLinkWrapper}>
              <p>詳細プロフィール</p>
            </Link>
          </div>
        </div>

        <DepartmentCard
          en="Designer"
          name="デザインチーム"
          description="グラフィック・サイトのデザイン（UI）・イベントのディレクションなどを行います。"
        />

        <DepartmentCard
          en="Engineer"
          name="開発チーム"
          description="サイトの開発・データ分析を行います。論文発表も行います。"
        />

        <DepartmentCard
          en="Former Suffer"
          name="元当事者チーム"
          description="自分たちの経験から、今悩む少年少女たちに何ができるかを考えます。"
        />

        <DepartmentCard
          en="Back Office"
          name="事務局"
          description="第3の家族のバックオフィスを担当します。"
        />
      </div>
    </>
  );
};

export default Organization;
