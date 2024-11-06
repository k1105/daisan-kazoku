import styles from "@/styles/Article.module.scss";
import Layout from "../../layout";
import Image from "next/image";
import Link from "next/link";
import BlockContainer from "@/components/BlockContainer";

const Gedokun = () => {
  return (
    <>
      <Layout pageTitle="gedokun" headline="gedokun">
        <div className={styles.jumbotron}>
          <div
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "21/9",
              position: "relative",
            }}
          >
            <Image
              src="/img/gedokun_mv.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="gedokunのサムネイル画像"
            />
          </div>
        </div>
        <BlockContainer>
          <div className={styles.leftSideItem}></div>
          <div className={styles.rightSideItem}>
            <p>
              匿名で悩みを投稿し、共感のボタンで励まし合うことができる掲示板サイト。
            </p>
            <Link href="https://daisan-kazoku.net/gedokun">
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
            <h2>家の悩みを励ましあおう</h2>
            <p>
              まずは一人で悩まずに悩みを吐き出してみたり、同じような人の存在を遠くに感じることを目指します。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>ユーザー登録・返信機能なし</h2>
            <p>
              シンプルに悩みを吐き出すだけの場所です。学校や地域の施設の端末からも使うことができます。
            </p>
            <h2>共感のボタンで励まし合う</h2>
            <p>
              「わかる」「エール」の共感のボタンを送り合います。誰かを励まし、自分も励まされます。
            </p>
            <h2>安全性の配慮</h2>
            <p>
              虐待・自殺リスクの高い投稿は、公的支援の紹介と個別対応を行います。
            </p>
            <h2>AIによるマッチング</h2>
            <p>
              投稿内容を分析して自分に近い悩みの投稿が表示されるようにし、より共感が集まるような場所にしています。
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>利用者の様子</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>投稿内容の例</h2>
            <ul className={styles.list}>
              <li>普通の家に産まれれば幸せだったのかな。なんか毎日が憂鬱。</li>
              <li>
                きょうだいが帰ってくると一段と扱いの差を感じる。両親ともに。
              </li>
              <li>にいちゃんと家出したい</li>
              <li>朝からいきなり怒鳴らないでほしい</li>
              <li>
                見た目に傷つけたりはされてないけど心の傷は何ヶ所もつけられてるよ
              </li>
            </ul>
            <h2>少年少女からの声</h2>
            <ul className={styles.list}>
              <li>「ここなら悩みを吐き出せる」</li>
              <li>「自分を応援してくれる人がいるんだと思うと涙が出た」</li>
              <li>「スマホの利用制限かけられているけどこれなら使える」</li>
            </ul>
            <h2>利用者数</h2>
            <ul className={styles.list}>
              <li>月間3,000人</li>
              <li>0時以降からの利用者が多い</li>
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

export default Gedokun;
