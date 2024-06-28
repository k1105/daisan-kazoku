import styles from "../../../styles/Article.module.scss";
import Layout from "../../layout";
import BlockContainer from "@/components/BlockContainer";

const Grant = () => {
  return (
    <>
      <Layout pageTitle="助成金情報詳細" headline="助成金情報詳細">
        <BlockContainer>
          <ul className={styles.list}>
            <li>2023年度 花王社会起業塾 - 2023年度 SVP東京 投資・協働先</li>
            <li>赤い羽根</li>
            <li>
              ポスト・コロナ（新型感染症）社会に向けた福祉活動応援キャンペーン(第8回)
            </li>
            <li>大阪コミュニティ財団 2024年度助成事業 社会福祉の増進</li>
            <li>一般財団法人 MRAハウス 「日本とアジアの未来」助成 2024年度</li>
          </ul>
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

export default Grant;
