import styles from "@/styles/Service.module.scss";
import Layout from "../../layout";
import Link from "next/link";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";

const KateiKankyoData = () => {
  return (
    <>
      <Layout pageTitle="家庭環境データ">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>
              <span className={styles.segment}>家庭環境</span>
              <span className={styles.segment}>データ</span>
            </h1>
            <p>家庭環境問題のリアルをビジュアライズする。</p>{" "}
            <Link href="https://katei-data.daisan-kazoku.net/">
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
              src="/img/katei-data_4_3.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="家庭環境データのサムネイル画像"
            />
          </div>
        </div>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <h2>立ち止まって考えてみる</h2>
            <p>
              家の話は身近すぎるが故に自分の傷に気付かないことがあります。実際のデータを「少し気になる」ような表現に落とし込み、立ち止まって考えるきっかけをつくることを目指します。
            </p>
            <div
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "21/9",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <Image
                src="/img/katei-data_map.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="家庭環境データの画像"
              />
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
                <h2>視覚比喩</h2>
                <p>
                  例えば、「心の病気を発症しやすくなる」という事象を「崩れそうなジェンガ」で表現します。グラフィックを見て少し考えるような時間をつくります。
                </p>
                <h2>少年少女の日常に溶け込む</h2>
                <p>
                  学校や街中での展示を行っています。家の悩みに自覚的でない子達でも、ふと立ち止まるようなきっかけをつくります。
                </p>
                <h2>周囲の人が手を差し伸べられるように</h2>
                <p>
                  家庭環境問題の実態をわかりやすく発信することで、少年少女の周囲にいる人たちが手を差し伸べるようなきっかけをつくることを目指します。
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/katei-data_4_3_feature.png"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="家庭環境データの特徴"
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
              <li>「私だけじゃなかったんだ」</li>
              <li>「普通に可愛い」</li>
              <li>
                「友達がこういう状況にいそうなので、詳しく知れて良かった」
              </li>
              <li>「これどういう意味？」</li>
            </ul>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>展示実績</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <ul className={styles.list}>
                <li>2023.11 渋谷100BANCH</li>
                <li>2024.01 横浜市立横浜総合高等学校</li>
                <li>2024.03 横浜市立戸塚高等学校</li>
                <li>2024.04 横浜駅西口 Niigoひろば</li>
                <li>2024.05 寛政中学校</li>
              </ul>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/katei-data.jpg"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="家庭環境データの展示のようす"
                />
              </div>
            </div>
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

export default KateiKankyoData;
