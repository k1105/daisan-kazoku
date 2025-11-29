import styles from "@/styles/Service.module.scss";
import Layout from "@/pages/layout";
import BlockContainer from "@/components/BlockContainer";
import Image from "next/image";

const DaisanKaigi = () => {
  return (
    <>
      <Layout pageTitle="第3の家族会議">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>第3の家族会議</h1>
            <p>
              みんなで世界を変える
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
              src="/img/daisan-kaigi.png"
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
            <h2>負の連鎖をワタシたちが断つ</h2>
            <p>
              <span className={styles.segment}>
                痛みがわかる少年少女たちが大人になった時、
              </span>
              <br />
              <span className={styles.segment}>
                もっと生きやすい社会になるのではないか。
              </span>
              <br />
              <span className={styles.segment}>
                問題の根本的解決に向けて、みんなで力を合わせる。
              </span>
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>少年少女</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>gedokun内第3の家族会議</h2>
                <p>
                  <span className={styles.segment}>
                    毎月3日、gedokunライブでみんなで作戦会議。
                  </span>
                  <br/>
                  <span className={styles.segment}>
                    アイデア会議、みんなの将来の夢、第3の家族の活動の共有など。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun-live.png"
                  fill
                  priority
                  alt="gedokunライブの画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>継続寄付者</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>YouTube第3の家族会議</h2>
                <p>
                  <span className={styles.segment}>
                    継続の寄付者さんに対して、
                  </span>
                  <br />
                  <span className={styles.segment}>
                    代表の奥村から考え中のアイデアの共有や近況報告。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/youtube.png"
                  fill
                  priority
                  alt="youtubeの画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>寄付者</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>3月の第3の家族会議</h2>
                <p>
                  <span className={styles.segment}>
                    第3の家族の寄付者・スタッフなどで、
                  </span>
                  <br />
                  <span className={styles.segment}>
                    第3の家族の今までとこれからを話す会議。
                  </span>
                  <br />
                  <span className={styles.segment}>
                    毎年3月対面で行います。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/kaigi.png"
                  fill
                  priority
                  alt="第3の家族会議の画像"
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

export default DaisanKaigi;
