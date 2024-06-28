import styles from "../../../styles/Article.module.scss";
import Layout from "../../layout";
import Image from "next/image";
import Link from "next/link";
import BlockContainer from "@/components/BlockContainer";

const Nigeruno = () => {
  return (
    <>
      <Layout pageTitle="nigeruno" headline="nigeruno">
        <div
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "4/3",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          <Image
            src="/img/nigeruno_mv.png"
            fill
            priority
            style={{
              objectFit: "contain",
            }}
            alt="nigerunoのサムネイル画像"
          />
        </div>
        <BlockContainer>
          <p>社会資源と経験者の人生を集めた情報サイト。</p>
          <Link href="https://daisan-kazoku.net/nigeruno">
            <div className={styles.innerLinkWrapper}>
              <p>Webサイトへ</p>
            </div>
          </Link>
        </BlockContainer>
        <BlockContainer>
          <h1 className={styles.headline}>コンセプト</h1>
          <h2>使える手札を見つけよう</h2>
          <p>
            多様な社会資源や経験者の情報を集め、自分の居場所を見つけるための一歩を踏み出せるようにすることを目指します。
          </p>
        </BlockContainer>
        <BlockContainer>
          <h1 className={styles.headline}>特徴</h1>
          <h2>社会資源の紹介</h2>
          <p>公的な支援から身近な頼れる人まで、幅広く紹介しています。</p>
          <h3>公的な支援</h3>
          <ul className={styles.list}>
            <li>児童相談所</li>
            <li>電話相談</li>
            <li>役所の窓口</li>
          </ul>
          <h3>民間サービス</h3>
          <ul className={styles.list}>
            <li>シェアハウス</li>
            <li>留学制度</li>
            <li>メンタルクリニック</li>
          </ul>
          <h3>頼れる身近な人</h3>
          <ul className={styles.list}>
            <li>学校の先生</li>
            <li>親戚</li>
            <li>親の友達</li>
          </ul>
          <h2>経験者の人生</h2>
          <p>
            かつて家庭環境問題に悩んだ経験者が、どのようにして今の人生を手に入れたかを解説しています。はざまの問題に対して、どのようにすれば良いか正解がないからこそ。それぞれの人生という一つの解を紹介しています。
          </p>
          <h2>安全性の配慮</h2>
          <p>掲載する情報は、専門家からの監修を受けています。</p>
          <h2>AIによる推薦</h2>
          <p>
            自分の悩んでいる状況を入力すると、自分に合ったページが紹介されます。
          </p>
        </BlockContainer>
        <BlockContainer>
          <h1 className={styles.headline}>利用者の様子</h1>
          <h2>少年少女から声</h2>
          <ul className={styles.list}>
            <li>「こんなにできることあるんだ」</li>
            <li>
              「同じような境遇の人の話は聞いたことがなかったので勉強になった」
            </li>
            <li>「早く知りたかった」</li>
          </ul>
          <h2>利用者数</h2>
          <ul className={styles.list}>
            <li>月1,500人</li>
            <li>ライフステージの変わり目の春頃の利用が多い</li>
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

export default Nigeruno;
