import styles from "@/styles/Article.module.scss";
import Layout from "@/pages/layout";
import BlockContainer from "@/components/BlockContainer";

const ShakaiKochiku = () => {
  return (
    <>
      <Layout pageTitle="社会構築事業" headline="社会構築事業">
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>問題を根本的に解決するための社会構築</h2>
            <p>
              第3の家族は、親が悪いとも思っていません。
              <br />
              一方で、「親ガチャ」「毒親」といった言葉が流行るのは、若者から見てそういった社会になっているからでしょう。
              親も子も揺らぎがあり、それを受け止められるような社会構築を目指します。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>はざまの声を集める</h2>
            <p>
              今まで一人一人が抱えていた声を、第3の家族のプラットフォームを通じてかたちにします。見えなかった社会問題を可視化します。
            </p>
            <h2>政策・文化提言</h2>
            <p>
              はざまの声をもとに、政策・文化・都市計画などのシステムへの提言を目指していきます。
            </p>
          </div>
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

export default ShakaiKochiku;
