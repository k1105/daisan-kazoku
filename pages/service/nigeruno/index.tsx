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
          <div className={styles.rightSideItem}>
            <p>社会資源と経験談を集めた情報サイト。</p>
            <Link href="https://daisan-kazoku.net/nigeruno">
              <div className={styles.innerLinkWrapper}>
                <p>Webサイトへ</p>
              </div>
            </Link>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>使える手札を見つけよう</h2>
            <p>
              多様な社会資源や経験者の情報を集め、自分の居場所を見つけるための一歩を踏み出せるようにすることを目指します。
              <br />
              「家か学校」という限られた選択肢ではなく、多様な「手札」を増やすことを目指します。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>多様な社会資源の紹介</h2>
            <p>
              公的な支援から身近な頼れる人まで、幅広く紹介しています。以下は紹介する情報の一例です。
            </p>
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
            <h2>経験者の人生の紹介</h2>
            <p>
              かつて家庭環境問題に悩んだ経験者が、どのようにして今の人生を歩んでいるかを解説しています。
              <br />
              はざまの問題に対して、どのようにすれば良いか正解がないからこそ。それぞれの人生という一つの解を紹介しています。
            </p>
            <h2>公的支援以外の手札も大切</h2>
            <p>
              公的な支援制度も紹介していますが、これらに繋げることが一番の目標ではありません。ソフトな手札も使いながら、自分にとってより良い道を探してもらいたいと考えています。即介入・即解決を目指すのではなく、その人のペースで、少しでも良いから前を向けるよう私たちも伴走します。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>利用者の様子</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>少年少女からの声</h2>
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
            </ul>
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

export default Nigeruno;
