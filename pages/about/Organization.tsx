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
        <div className={styles.profileContainer}>
          <p  className={styles.position}>代表</p>
          <div>
            <h2>奥村春香</h2>
            <p className={styles.description}>
              活動のきっかけは、大学2年生の時に弟を自死で亡くしたことです。1年間は何もできなかったのですが、もとからものづくりが好きだったので、家庭環境に悩む人のための掲示板を試しに作ってみたところ、想像以上に人が集まりました。「つくってくれてありがとう」という嬉しい言葉をもらう一方、集まる悩みの重大さを実感し「もっとやらなければ」と思い、新卒で入社したLINE株式会社を退職し、NPO法人第3の家族を立ち上げました。今は、自身の過去のために活動をやっているという気持ちはなく、はざまの少年少女たちと一緒に揺られながら、より良い状態をつくって行くことに没頭しています。
            </p>
            <Link href="/people/okumura" className={styles.innerLinkWrapper}>
              <p>詳細プロフィール</p>
            </Link>
          </div>
        </div>

        <DepartmentCard
          en="Engineer"
          name="開発チーム"
          description="サービスのデザイン・エンジニアリングを担当。"
        />

        <DepartmentCard
          en="Former Suffer"
          name="若者メンバー"
          description="かつての第3の家族の利用者。運営手伝いや助言など。"
        />

        <DepartmentCard
          en="Volunteer"
          name="ボランティア"
          description="社会人経験を活かしたボランティアメンバー。"
        />

        <DepartmentCard
          en="Back Office"
          name="事務局"
          description="バックオフィスを担当。"
        />
      </div>
    </>
  );
};

export default Organization;
