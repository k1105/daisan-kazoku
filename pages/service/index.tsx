import Layout from "@/pages/layout";
import ServiceCard from "@/pages/about/ServiceCard";
import BlockContainer from "@/components/BlockContainer";
import styles from "@/styles/About.module.scss";

const Service = () => {
  return (
    <>
      <Layout pageTitle="事業内容" headline="事業内容">
        <div  className={styles.blockContainerColumnNarrow}>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h3>1：Web事業</h3>
            </div>
            <div className={styles.rightSideItem}>
              <div className={styles.serviceCardContainer}>
                <ServiceCard
                  title="gedokun"
                  path="/service/gedokun"
                  image="/img/gedokun_4_3.png"
                />
                <ServiceCard
                  title="nigeruno"
                  path="/service/nigeruno"
                  image="/img/nigeruno_4_3.png"
                />
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h3>2：イベント事業</h3>
            </div>
            <div className={styles.rightSideItem}>
              <div className={styles.serviceCardContainer}>
                <ServiceCard
                  title="裏〇〇の日"
                  path="/service/ura"
                image="/img/urahaha_4_3.png"
                />
                <ServiceCard
                  title="インフルエンサーコラボ"
                  path="/service/entertainment"
                  image="/img/live_4_3.png"
                />
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h3>3：みんなで世界を変える</h3>
            </div>
            <div className={styles.rightSideItem}>
              <div className={styles.serviceCardContainer}>
                <ServiceCard
                  title="第3の家族会議"
                  path="/service/daisan-kaigi"
                  image="/img/daisan-kaigi.png"
                      />
                <ServiceCard
                  title="家庭環境データ"
                  path="/service/katei-kankyo-data"
                  image="/img/katei-data_4_3.png"
                />
                <ServiceCard
                  title="登壇・出演"
                  path="/service/appearances"
                  image="/img/appearances.png"
                />
              </div>
            </div>
          </BlockContainer>
        </div>
      </Layout>
    </>
  );
};

export default Service;
