import styles from "../../../styles/Article.module.scss";
import Layout from "../../layout";
import Link from "next/link";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";

const KateiKankyoData = () => {
  return (
    <>
      <Layout pageTitle="家庭環境データ" headline="家庭環境データ">
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
            src="/img/katei-data_mv.png"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
            alt="家庭環境データのサムネイル画像"
          />
        </div>
        <BlockContainer>
          <div className={styles.rightSideItem}>
            <p>家庭環境問題のリアルをビジュアライズする。</p>
            <Link href="https://katei-data.daisan-kazoku.net/">
              <div className={styles.innerLinkWrapper}>
                <p>Webサイトへ</p>
              </div>
            </Link>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>立ち止まって考えてみる</h2>
            <p>
              家の話は身近すぎるが故に自分の傷に気付かないことがあります。実際のデータを「少し気になる」ような表現に落とし込み、立ち止まって考えるきっかけをつくることを目指します。
            </p>
            <div
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
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
          <div className={styles.rightSideItem}>
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
          <div className={styles.rightSideItem}>
            <div
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
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
            <ul className={styles.list}>
              <li>2023.11 渋谷100BANCH</li>
              <li>2024.01 横浜市立横浜総合高等学校</li>
              <li>2024.03 横浜市立戸塚高等学校</li>
              <li>2024.04 横浜駅西口 Niigoひろば</li>
              <li>2024.05 寛政中学校</li>
            </ul>
            <p>展示開催のご依頼はお問い合わせよりご連絡ください。</p>
            <p>
              <a href="https://www.notion.so/481e97f5f67f44f785cef105cf06b40f?pvs=21">
                お問い合わせ
              </a>
            </p>
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
