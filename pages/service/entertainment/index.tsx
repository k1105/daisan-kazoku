import styles from "@/styles/Service.module.scss";
import Layout from "../../layout";
import Image from "next/image";
import BlockContainer from "@/components/BlockContainer";
import Link from "next/link";


const Entertainment = () => {
  return (
    <>
      <Layout pageTitle="インフルエンサーコラボ">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>インフルエンサーコラボ</h1>
            <p>インフルエンサーとのコラボ企画。</p>
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
              src="/img/live_4_3.png"
              fill
              priority
              alt="音楽ライブのサムネイル画像"
            />
          </div>
        </div>
        <div  className={styles.blockContainerColumn}>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>少年少女たちを見つける、声を響かせる。</h2>
            <p>
              <span className={styles.segment}>
                共通点のあるインフルエンサーのファンには、悩む少年少女もいます。
              </span>
              <br />
              <span className={styles.segment}>
                まだ第3の家族がで会えていない少年少女を見つけ、
              </span>
              <br />
              <span className={styles.segment}>
                インフルエンサーの個性ある言葉を響かせます。
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
                <h2>音楽ライブ</h2>
                <p>
                  <span className={styles.segment}>
                    「家のこと忘れてみんなで集まろう」
                  </span>
                  <br />
                  <span className={styles.segment}>
                    共感で集まってくれたアーティストたちから
                  </span>
                  <br />
                  <span className={styles.segment}>
                    パフォーマンスやエールをもらいます。
                  </span>
                </p>
                <Link href="https://youtube.com/playlist?list=PLL-bN2IrGfxn2bGXnyofhmDud76g_6H88&si=Aj1y6371uY_K61dK">
                  <div className={styles.innerLinkWrapper}>
                    <p className={styles.linkText}>YouTubeへ</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/live_4_3.png"
                  fill
                  priority
                  alt="音楽ライブの画像"
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
                <h2>悩みに応えてみた</h2>
                <p>
                  <span className={styles.segment}>
                    夏休みのこどもの自殺が増える時期に備えて
                  </span>
                  <br />
                  <span className={styles.segment}>
                    少年少女の悩みにインフルエンサーが応えます。
                  </span>
                </p>
                <Link href="https://www.youtube.com/@GY4Ych">
                  <div className={styles.innerLinkWrapper}>
                    <p className={styles.linkText}>YouTubeへ</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gy4y.png"
                  fill
                  priority
                  alt="音楽ライブの画像"
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
                <h2>ひろゆきコラボ</h2>
                <p>
                  <span className={styles.segment}>
                    gedokunから集めてきた悩みに、
                  </span>
                  <br />
                  <span className={styles.segment}>
                    ひろゆきさんが動画をつくってくれました。
                  </span>
                </p>
                <Link href="https://youtu.be/KmCUBDWi6T0?si=TcK6WCpSs-6_uzxa">
                  <div className={styles.innerLinkWrapper}>
                    <p className={styles.linkText}>YouTubeへ</p>
                  </div>
                </Link>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/hiroyuki.png"
                  fill
                  priority
                  alt="音楽ライブの画像"
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

export default Entertainment;
