import Layout from "../../layout";
import styles from "../../../styles/Article.module.scss";
import BlockContainer from "@/components/BlockContainer";

export default function Okumura() {
  return (
    <>
      <Layout pageTitle="奥村 春香">
        <>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <div className="profile-container">
                <h2>奥村春香</h2>
                <p className="position">NPO法人第3の家族 理事長（代表）</p>
                <p className="description">
                  活動のきっかけは、大学3年生の時に家庭環境問題が原因で弟を自死で亡くしたことです。私の受験失敗を機に家庭が壊れ、親子喧嘩が絶えない中での出来事でした。1年間は何もできなかったのですが、もとからものづくりが好きだったので、家庭環境に悩む人のための掲示板を試しに作ってみたところ、想像以上に人が集まりました。「つくってくれてありがとう」という嬉しい言葉をもらう一方、集まる悩みの重大さを実感し「もっとやらなければ」と思い、新卒で入社したLINE株式会社を退職し、NPO法人第3の家族を立ち上げました。今は、自身の過去のために活動をやっているという気持ちはなく、はざまの少年少女たちと一緒に揺られながら、より良い状態をつくって行くことに没頭しています。
                </p>
              </div>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>受賞</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={styles.list}>
                <li>Forbes JAPAN 30 UNDER 30「世界を変える30歳未満」2023</li>
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
              <ul className={styles.list}>
                <li>花王社会起業塾卒業</li>
                <li>LINE株式会社 Product Designer</li>
                <li>法政大学デザイン工学部卒業（学士：工学）</li>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>インタビュー記事</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://sdgs.yahoo.co.jp/originals/198.html"
                    className={styles.externalLink}
                  >
                    Yahoo! JAPAN
                    SDGs「4人に1人の若者が「家に居場所がない」。&apos;寄り添わない&apos;支援で生き抜くための手札を
                    #豊かな未来を創る人」（2024）
                  </a>
                </li>
                <li>
                  <a
                    href="https://forbesjapan.com/articles/detail/65699"
                    className={styles.externalLink}
                  >
                    Forbes
                    JAPAN「自分の居場所はほかにもある。家庭環境に悩む若者を支える」（2023）
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
              <p>展示会巡りと野外ロックフェス</p>
            </div>
          </BlockContainer>
          <style jsx>
            {`
              .profile-container {
                margin-bottom: 5rem;
                .position {
                  font-size: 0.8rem;
                  margin-bottom: 3rem;
                }
                .description {
                  line-height: 1.8rem;
                  margin-bottom: 2rem;
                  max-width: 32rem;
                }

                h2 {
                  font-weight: 400;
                }
              }

              @media screen and (max-width: 600px) {
                .profile-container {
                  width: 100%;
                  .description {
                    line-height: 1.5rem;
                  }
                }
              }
            `}
          </style>
        </>
      </Layout>
    </>
  );
}
