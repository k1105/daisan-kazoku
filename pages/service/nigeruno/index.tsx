import styles from "@/styles/Service.module.scss";
import Layout from "../../layout";
import Image from "next/image";
import Link from "next/link";
import BlockContainer from "@/components/BlockContainer";

const Nigeruno = () => {
  return (
    <>
      <Layout pageTitle="nigeruno">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>nigeruno</h1>
            <p>つらい状況から「逃げ出す」情報サイト。</p>
            <Link href="https://daisan-kazoku.net/nigeruno">
              <div className={styles.innerLinkWrapper}>
                <p className={styles.linkText}>Webサイトへ</p>
              </div>
            </Link>
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
              src="/img/nigeruno_4_3.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="nigerunoのサムネイル画像"
            />
          </div>
        </div>
        <div  className={styles.blockContainerColumn}>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>手札を集める</h2>
            <p>
              <span className={styles.segment}>
                「家か学校だけの世界」「死ぬしかない」
              </span>
              <br />
              <span className={styles.segment}>
                限られた選択肢ではなく、多様な「手札」を増やします。
              </span>
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>掲載情報</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <h2>公的な情報</h2>
                  <p>
                    児童相談所や警察など。難しい内容をわかりやすくまとめます。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>民間団体情報</h2>
                  <p>
                    NPOや民間サービスの紹介。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>自分でできること</h2>
                  <p>
                    「親に気持ちを伝える」「依存先を増やす」など、自分でできること。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>経験談</h2>
                  <p>
                    かつて第3の家族を使っていた人の経験談。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>コラム</h2>
                  <p>
                    落ち入りやすい思考に対して、立ち止まって考えてもらえるように。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>悩んできた人の集合知</h2>
                <p>
                  <span className={styles.segment}>
                    かつて悩んできた人からの情報提供や
                  </span>
                  <span className={styles.segment}>
                    専門家の監修によってできています。
                  </span>
                  <span className={styles.segment}>
                    他の情報サイトよりも当事者目線が特徴です。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/nigeruno_4_3_feature.png"
                  fill
                  priority
                  alt="nigerunoの特徴"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>実績</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>まだ道があると気づけた</h2>
                <p>
                  <span className={styles.segment}>
                    「親に相談できた」「児相に通報できた」
                  </span>
                  <span className={styles.segment}>
                    など、一歩踏み出せた少年少女たちがいます。
                  </span>
                  <span className={styles.segment}>
                    NHKおはよう日本、ハートネットTVで特集されました。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/nigeruno-nhk.png"
                  fill
                  priority
                  alt="nigerunoの利用者の画像"
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

export default Nigeruno;
