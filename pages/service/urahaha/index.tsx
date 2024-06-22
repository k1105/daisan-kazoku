import styles from "../../../styles/Article.module.scss";
import Layout from "../../layout";

const Urahaha = () => {
  return (
    <>
      <Layout pageTitle="裏母の日">
        <div className={styles.articleContainer}>
          <p>母の日をどんな気持ちで迎えたらいいのかわからない人のための日。</p>
          <p>サイトへのボタン</p>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>コンセプト</h1>
          <h2>母の日の裏にある居場所</h2>
          <p>
            家庭環境に悩んだ人の中には、過去の傷つきやトラウマから、母の日をどんな気持ちで迎えたら良いかわからない人たちもいます。
          </p>
          <p>
            既存の母の日や親子関係を否定するものではなく、心にぽっかり穴が空いた一日に、みんなで過ごす時間をつくることを目指します。
          </p>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>特徴</h1>
          <h2>当事者同士のゆる座談会</h2>
          <p>
            過去の話や近況についてゆるゆると話します。話しながら紙をちぎり、最後にみんなで一つの作品を作ります。
          </p>
          <h2>ありがとうを誰かに伝えるワークショップ</h2>
          <p>大切な人・動物・モノに向けて、手紙を書きます。</p>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.headline}>利用者の様子</h1>
          <h2>参加者からの声</h2>
          <ul>
            <li>「母の日がいつもと違う思い出の日になった」</li>
            <li>「自分の想いを話せて良かった」</li>
            <li>「ワークショップが楽しかった」</li>
          </ul>
          <h2>開催実績</h2>
          <ul>
            <li>2023.05 渋谷・オンライン</li>
            <li>2024.05 渋谷・オンライン</li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Urahaha;
