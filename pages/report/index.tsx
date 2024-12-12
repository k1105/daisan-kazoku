import BlockContainer from "@/components/BlockContainer";
import Layout from "../layout";
import styles from "@/styles/Article.module.scss";

const Report = () => {
  return (
    <>
      <Layout pageTitle="技術" headline="技術">
        <BlockContainer>
          <div className={styles.rightSideItem}>
            <h2>Design</h2>
            <p>利用者の体験価値、使用性（使いやすさ）を向上させます。</p>
            <h2>Engineering</h2>
            <p>効果的かつ持続可能なシステムを開発行います。</p>
          </div>
        </BlockContainer>
      </Layout>
    </>
  );
};

export default Report;
