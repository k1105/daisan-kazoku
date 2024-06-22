import Image from "next/image";
import Layout from "../layout";
import Link from "next/link";
import ServiceCard from "../about/ServiceCard";
import styles from "../../styles/Article.module.scss";

const Service = () => {
  return (
    <>
      <Layout pageTitle="サービス">
        <h1 style={{ fontWeight: "100", marginBottom: "3rem" }}>事業内容</h1>
        <div className={styles.articleContainer}>
          <h3>1：Web事業</h3>
          <p>デザイン・テクノロジーによって日常を支えます。</p>
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

          <h3>2：イベント事業</h3>
          <p>アートによって支援らしくない入り口をつくります。</p>
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
      </Layout>
    </>
  );
};

export default Service;
