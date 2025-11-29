import styles from "@/styles/Service.module.scss";
import Layout from "@/pages/layout";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";

const Ura = () => {
  return (
    <>
      <Layout pageTitle="裏〇〇の日">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>裏〇〇の日</h1>
            <p>
              祝日のイベント事業。
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
              src="/img/urahaha_4_3.png"
              fill
              priority
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
            <h2>ハレの日の裏に居場所をつくる</h2>
            <p>
              <span className={styles.segment}>
                母の日や成人式など一般的にはハレの日でも、
              </span>
              <br />
              <span className={styles.segment}>
                しんどさを抱える少年少女には、少し億劫な日になることも。
              </span>
              <br />
              <span className={styles.segment}>
                どうしようもない1日を分け合うイベント。
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
                <h2>裏母の日</h2>
                <p>
                  <span className={styles.segment}>
                    母の日のモヤモヤや、忘れたい過去を
                  </span>
                  <span className={styles.segment}>
                    座談会や焚き木イベントで昇華させます。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/urahaha.png"
                  fill
                  priority
                  alt="裏母の日の画像"
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
                <h2>裏七夕</h2>
                <p>
                  <span className={styles.segment}>
                    毎年1つの共通メッセージを決めて、
                  </span>
                  <span className={styles.segment}>
                    自分の家の近くの短冊に願いを書きます。
                  </span>
                  <span className={styles.segment}>
                    家の近くの誰かにも届きますように。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/tanabata.png"
                  fill
                  priority
                  alt="七夕の画像"
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
                <h2>裏成人式</h2>
                <p>
                  <span className={styles.segment}>
                    成人式に行けない、行きたくない、行ったけどモヤモヤする。
                  </span>
                  <span className={styles.segment}>
                    そんな人のための夜の3次会。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/ogp.png"
                  fill
                  priority
                  alt="裏成人式の画像"
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

export default Ura;
