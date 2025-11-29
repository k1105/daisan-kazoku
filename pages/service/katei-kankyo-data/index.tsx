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
            <h1 className={styles.serviceTitle}>家庭環境データ</h1>
            <p>調査・研究事業。</p>
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
        <div  className={styles.blockContainerColumn}>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>少年少女の声を研究する</h2>
            <p>
              <span className={styles.segment}>
                少年少女たちは何に悩み、何が必要なのか。
              </span>
              <br />
              <span className={styles.segment}>
                調査研究から客観的に明らかにします。
              </span>
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>学会発表</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
              <h2>研究者と協力</h2>
              <ul className={styles.list}>
                <li>2024.10 第83回公衆衛生学会 ポスター展示「掲示板ネトノグラフィーを用いた家庭環境問題を抱える子ども・若者のペルソナ分析」</li>
                <li>2025.11 第31回日本子ども虐待防止学会 公募シンポジウム「子どもの⼼理的虐待を明らかにする」</li>
              </ul>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/research.png"
                  fill
                  priority
                  alt="展示の画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>独自調査</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>独自調査とメディアへの提供</h2>
                <ul className={styles.list}>
                  <li>
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000019.000120079.html"
                      className={styles.externalLink}
                    >
                      2025.01 親と子の進路希望比較
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000023.000120079.html"
                      className={styles.externalLink}
                    >
                      2025.08 夏休みが終わる頃この世から消えたい
                    </a>
                  </li>
                </ul>
                <Link href="/about/media">
                  <div className={styles.innerLinkWrapper}>
                    <p>メディア・登壇出展一覧</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/dodesuka.png"
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
            <h1 className={styles.headline}>展示</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>視覚比喩を用いた表現</h2>
                <p>
                  <span className={styles.segment}>
                    調査した結果をビジュアライズ。
                  </span>
                  <span className={styles.segment}>
                    難しい内容を、ちょっと考えたくなる表現に。
                  </span>
                  <span className={styles.segment}>
                    渋谷や横浜で展示を実施。
                  </span>
                </p>
                <Link href="https://katei-data.daisan-kazoku.net/">
                  <div className={styles.innerLinkWrapper}>
                    <p className={styles.linkText}>Webサイトへ</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/katei-data.jpg"
                  fill
                  priority
                  alt="展示の画像"
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

export default KateiKankyoData;
