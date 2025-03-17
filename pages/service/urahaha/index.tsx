import styles from "@/styles/Service.module.scss";
import Layout from "@/pages/layout";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";

const Urahaha = () => {
  return (
    <>
      <Layout pageTitle="裏母の日">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>裏母の日</h1>
            <p>
              母の日をどんな気持ちで迎えたらいいのかわからない人のための日。
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
              style={{
                objectFit: "contain",
              }}
              alt="裏母の日のサムネイル画像"
            />
          </div>
        </div>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>母の日の裏にある居場所</h2>
            <p>
              家庭環境に悩んだ人の中には、過去の傷つきやトラウマから、母の日をどんな気持ちで迎えたら良いかわからない人たちもいます。
              <br />
              既存の母の日や親子関係を否定するものではなく、心にぽっかり穴が空いた一日に、みんなで過ごす時間をつくることを目指します。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>当事者同士のゆる座談会</h2>
                <p>
                  過去の話や近況についてゆるゆると話します。お互いの家庭環境には深く干渉しません。
                </p>
                <h2>かたちにするワークショップ</h2>
                <p>
                  何かが解決するわけではありませんが、共に過ごした時間をかたちにします。
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/urahaha_4_3_feature.png"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  alt="音楽ライブのサムネイル画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>利用者の様子</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>参加者からの声</h2>
            <ul className={styles.list}>
              <li>「母の日がいつもと違う思い出の日になった」</li>
              <li>「自分の想いを話せて良かった」</li>
              <li>「ワークショップが楽しかった」</li>
              <li>「今となっては笑い話」</li>
            </ul>
            <h2>開催実績</h2>
            <ul className={styles.list}>
              <li>2023.05 渋谷・オンライン</li>
              <li>2024.05 渋谷・オンライン</li>
            </ul>
          </div>
        </BlockContainer>
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

export default Urahaha;
