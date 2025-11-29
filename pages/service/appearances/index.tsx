import styles from "@/styles/Service.module.scss";
import Layout from "@/pages/layout";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";
import Link from "next/link";

const Appearances = () => {
  return (
    <>
      <Layout pageTitle="登壇・出演">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>登壇・出演
            </h1>
            <p>
              活動や調査結果を外へ発信
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <Image
              src="/img/appearances.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="裏母の日のサムネイル画像"
            />
          </div>
      </div>
      <div  className={styles.blockContainerColumn}>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>少年少女の声を届ける</h2>
            <p>
              <span className={styles.segment}>
                大人たちがまとめた少年少女の声と、
              </span>
              <br />
              <span className={styles.segment}>
                若者の等身大の声の両方を届ける。
              </span>
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>case1</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
              <h2>委員会の参加・登壇</h2>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://www.cfa.go.jp/councils/shingikai/kodomo_ibasho"
                    className={styles.externalLink}
                  >
                    令和7年度 こども家庭庁 こどもの居場所部会
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cao.go.jp/kodoku_koritsu/torikumi/platform/gaiyou/setsuritsusoukai4.html"
                    className={styles.externalLink}
                  >
                    内閣府 孤独・孤立対策官民連携プラットフォーム 第4回総会
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.youmonken.org/taikaiyoukou.pdf"
                    className={styles.externalLink}
                  >
                    令和7年度 全国児童養護問題研究会 登壇
                  </a>
                </li>
                <li>こども家庭庁 学ぼう心のサイン 守ろう10代の命</li>
                <li>社会的養育地域支援ネットワーク 登壇</li>
              </ul>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/appearances-okumura.png"
                  fill
                  priority
                  alt="奥村の画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
       <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>case2</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>かつての利用者が発信する</h2>
                <ul className={styles.list}>
                  <li>
                    <a
                      href="https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/99d1cd43-94e4-40b2-841a-a8f29a504e84/3e5627ca/20250903_press_99d1cd43-94e4-40b2-841a-a8f29a504e84_02.pdf"
                      className={styles.externalLink}
                    >
                      こども家庭庁 こどもの居場所づくりオールミーティング
                    </a>
                  </li>
                  <li>メディアや行政への若者からの意見の提供協力</li>
                </ul>
                <Link href="/about/media">
                  <div className={styles.innerLinkWrapper}>
                    <p>メディア・登壇出展一覧</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/appearances-youth.png"
                  fill
                  priority
                  alt="テレビの画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>case3</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>メディア出演</h2>
                <ul className={styles.list}>
                  <li>クローズアップ現代</li>
                  <li>ABEMAヒルズ</li>
                  <li>関口宏のこの先どうなる！？</li>
                  <li>SEVEN BANK GLOBAL BUSINESS CHARGE</li>
                  <li>J-WAVE『-JK RADIO- TOKYO UNITED』</li>
                </ul>
                <Link href="/about/media">
                  <div className={styles.innerLinkWrapper}>
                    <p>メディア・登壇出展一覧</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/appearances-tv.png"
                  fill
                  priority
                  alt="奥村の画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>case4</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>寄稿</h2>
                <ul className={styles.list}>
                  <li>2025年５月号 こころの科学 「寄り添わない支援」を広げたい</li>
                  <li>神奈川社会福祉協議会 福祉タイムズ 子ども・若者の居場所 「寄り添わない支援」のカタチー公的支援のはざまでしんどさを抱えるユースたち</li>
                </ul>
                <Link href="/about/media">
                  <div className={styles.innerLinkWrapper}>
                    <p>メディア・登壇出展一覧</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/appearances-book.png"
                  fill
                  priority
                  alt="奥村の画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
      </div>
        <style jsx>{`
          ul {
            margin-top: 0;
            margin-bottom: 3rem;
          }
          p {
            margin-bottom: 3rem;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Appearances;
