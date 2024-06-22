import styles from "../../../styles/Article.module.scss";
import Layout from "../../layout";
import Link from "next/link";
import Image from "next/image";

const DaisanLive = () => {
  return (
    <>
      <Layout pageTitle="音楽ライブ" headline="音楽ライブ">
        <div className={styles.articleContainer}>
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
              src="/img/live.png"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="音楽ライブのサムネイル画像"
            />
          </div>
          <p>次の一歩に繋げるための音楽ライブ。</p>
          <Link href="#">
            <div className={styles.innerLinkWrapper}>
              <p>Webサイトへ</p>
            </div>
          </Link>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>コンセプト</h1>
          <h2>家のこと忘れて音楽で集まろう</h2>
          <p>
            家庭環境問題や支援など、堅苦しいことはまずは置いといて、楽しむ場を作ります。そして、次の一歩に繋げるアーティストとの出会いをつくることを目指します。
          </p>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>特徴</h1>
          <h2>アーティストならではの支援</h2>
          <p>
            アーティストから、熱いメッセージをもらいます。アーティストの言葉には、学校の先生や支援者から出る言葉とはまた違う、少年少女の一歩を踏み出させる力があります。
          </p>
          <h2>想いが集まった人たちでつくる場</h2>
          <p>
            イベントはチャリティーで行うため、「少年少女たちに何かしてあげたい」人たちで構成されています。そういった場をつくること自体が、少年少女たちに味方がいることの証明でもあります。
          </p>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>利用者の様子</h1>
          <h2>少年少女から声</h2>
          <ul className={styles.list}>
            <li>「生きてて良かった」</li>
            <li>「人生が急上昇した！」</li>
            <li>「ライブの後、親にやめて欲しいことを言えた」</li>
          </ul>
        </div>
        {/* <div className={styles.articleContainer}>
          <h2>開催実績</h2>
          <h3>第一回目</h3>
          <p>2024.05 渋谷 参加者26名</p>
          <p>Youtube埋め込み</p>
        </div> */}
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

export default DaisanLive;
