import Layout from "../layout";
import ServiceCard from "../about/ServiceCard";
import styles from "../../styles/Article.module.scss";

export default function People() {
  return (
    <>
      <Layout pageTitle="メンバー" headline="メンバー">
        <>
          <div
            className={styles.serviceCardContainer}
            style={{ margin: "20px 0" }}
          >
            <ServiceCard title="奥村 春香" path="/people/okumura" />
          </div>
        </>
      </Layout>
    </>
  );
}
