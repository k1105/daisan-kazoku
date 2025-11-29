import Layout from "../../layout";
import styles from "../../../styles/About.module.scss";
import BlockContainer from "@/components/BlockContainer";

export default function Okumura() {
  return (
    <>
      <Layout pageTitle="奥村 春香">
        <>
        <div  className={styles.blockContainerColumnMiddle}>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>プロフィール</h1>
            </div>
            <div className={styles.rightSideItem}>
            <h2>奥村春香</h2>
            <h3>認定NPO法人第3の家族理事長</h3>
            <p className={styles.description}>
              活動のきっかけは、大学2年生の時に弟を自死で亡くしたことです。1年間は何もできなかったのですが、もとからものづくりが好きだったので、家庭環境に悩む人のための掲示板を試しに作ってみたところ、想像以上に人が集まりました。「つくってくれてありがとう」という嬉しい言葉をもらう一方、集まる悩みの重大さを実感し「もっとやらなければ」と思い、新卒で入社したLINE株式会社を退職し、NPO法人第3の家族を立ち上げました。今は、自身の過去のために活動をやっているという気持ちはなく、はざまの少年少女たちと一緒に揺られながら、より良い状態をつくって行くことに没頭しています。
            </p>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>受賞</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={`${styles.list} ${styles.mt0}`}>
                <li>Forbes JAPAN 30 UNDER 30「世界を変える30歳未満」2023</li>
                <li>第39回 青年版国民栄誉賞 文部科学大臣賞</li>
                <li>グッドデザイン・ニューホープ賞2022 最優秀賞</li>
                <li>Asia Digital Award Fukuoka 2021 入賞</li>
                <li>法政大学理系同窓会成績優秀者</li>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>経歴</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={`${styles.list} ${styles.mt0}`}>
                <li>1999.08 誕生</li>
                <li>2018.04〜2022.03 法政大学デザイン工学部</li>
                <li>2021.01 弟の死</li>
                <li>2022.03 第3の家族活動開（gedokunリリース）</li>
                <li>2022.04〜2023.09 LINE株式会社Product Designer</li>
                <li>2023.03 NPO法人第3の家族設立</li>
                <li>2023.09〜2024.03 花王社会起業塾</li>
                <li>2025.04〜 こどもの居場所部会委員</li>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>インタビュー記事</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={`${styles.list} ${styles.mt0}`}>
                <li>
                  <a
                    href="https://bunshun.jp/articles/-/81745#goog_rewarded"
                    className={styles.externalLink}
                  >
                    文春オンライン
                    「第3の家族」代表・奥村春香さんインタビュー #1
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.asahi.com/sdgs/article/15567768"
                    className={styles.externalLink}
                  >
                    朝日新聞SDGs ACTION!
                    悩んでいる子どもたちへ いつでも立ち寄れる「第3の家族」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.japandesign.ne.jp/interview/newhope-1/"
                    className={styles.externalLink}
                  >
                    JDN「少年少女の自立に向けた「第3の存在」を目指して―グッドデザイン・ニューホープ賞最優秀賞」（2023）
                  </a>
                </li>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>趣味</h1>
            </div>
            <div className={styles.rightSideItem}>
              <p>アートとロック</p>
            </div>
          </BlockContainer>
        </div>
        </>
      </Layout>
    </>
  );
}
