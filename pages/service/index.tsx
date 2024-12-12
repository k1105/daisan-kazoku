import Layout from "@/pages/layout";
import ServiceCard from "@/pages/about/ServiceCard";
import BlockContainer from "@/components/BlockContainer";
import styles from "@/styles/Article.module.scss";

const Service = () => {
  return (
    <>
      <Layout pageTitle="事業内容" headline="事業内容">
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h3>1：Web事業</h3>
          </div>
          <div className={styles.rightSideItem}>
            <p>悩みを吐き出し、手札を増やす。</p>
            <div
              className={styles.serviceCardContainer}
              style={{ margin: "20px 0" }}
            >
              <ServiceCard
                title="gedokun"
                path="/service/gedokun"
                image="/img/gedokun_mv.png"
              />
              <ServiceCard
                title="nigeruno"
                path="/service/nigeruno"
                image="/img/nigeruno_mv.png"
              />
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h3>2：イベント事業</h3>
          </div>
          <div className={styles.rightSideItem}>
            <p>点と点を繋いで生きていく。</p>
            <div
              className={styles.serviceCardContainer}
              style={{ margin: "20px 0" }}
            >
              <ServiceCard
                title="家庭環境データ"
                path="/service/katei-kankyo-data"
                image="/img/katei-data.jpg"
              />
              <ServiceCard
                title="裏母の日"
                path="/service/urahaha"
                image="/img/urahaha.png"
              />
              <ServiceCard
                title="音楽ライブ"
                path="/service/daisan-live"
                image="/img/live.png"
              />
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h3>3：社会構築事業</h3>
          </div>
          <div className={styles.rightSideItem}>
            <p>問題を根本的に解決する。</p>
            <div
              className={styles.serviceCardContainer}
              style={{ margin: "20px 0" }}
            >
              <ServiceCard
                title="社会構築事業"
                path="/service/shakai-kochiku"
                image="/ogp.png"
              />
            </div>
          </div>
        </BlockContainer>
      </Layout>
    </>
  );
};

export default Service;
