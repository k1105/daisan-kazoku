import styles from "../../../styles/About.module.scss";
import Layout from "../../layout";
import BlockContainer from "@/components/BlockContainer";

const Grant = () => {
  return (
    <>
      <Layout pageTitle="採択助成金" headline="採択助成金">
        <div className={styles.blockContainerColumnNarrow}>
        <div>採択いただいた助成金の一覧です。ご支援いただきありがとうございました。</div>
          <ul className={styles.list}>
            <li>赤い羽根共同募金「被害者やその家族等への支援活動助成」 2025年度</li>
            <li>公益財団法人 大同生命厚生事業団 ビジネスパーソンボランティア活動助成 2025年度</li>
            <li>神奈川県 ＮＰＯ活動基盤づくり補助金 2025年度</li>
            <li>べに花はばたけ基金</li>
            <li>休眠預金事業 一般財団法人リープ共創基金 2023 年度早期介入助成 ICT を核とした早期介入のエコシステムの構築</li>
            <li>一般財団法人 MRAハウス 「日本とアジアの未来」助成 2024年度</li>
            <li>大阪コミュニティ財団 2024年度助成事業 社会福祉の増進</li>
            <li>赤い羽根 ポスト・コロナ（新型感染症）社会に向けた福祉活動応援キャンペーン(第8回)</li>
            <li>SVP東京 投資・協働先 2023年度</li>
            <li>花王社会起業塾 - 2023年度 SVP東京 投資・協働先 2023年度</li>
          </ul>
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

export default Grant;
