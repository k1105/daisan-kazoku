import Image from "next/image";
import Layout from "../layout";
import Link from "next/link";
import ServiceCard from "../about/ServiceCard";
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
            <p>社会資源に繋げるプラットフォーム。</p>
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
            <p>ハレの裏に居場所を作る対面イベント。</p>
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
      </Layout>
    </>
  );
};

export default Service;
