import styles from "@/styles/Service.module.scss";
import Layout from "../../layout";
import Image from "next/image";
import Link from "next/link";
import BlockContainer from "@/components/BlockContainer";

const Gedokun = () => {
  return (
    <>
      <Layout pageTitle="gedokun">
        <div className={styles.jumbotron}>
          <div>
            <h1 className={styles.serviceTitle}>gedokun</h1>
            <p>匿名で悩みを吐き出し、少しだけ前を向ける場。</p>
            <Link href="https://daisan-kazoku.net/gedokun">
              <div className={styles.innerLinkWrapper}>
                <p className={styles.linkText}>Webサイトへ</p>
              </div>
            </Link>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <Image
              src="/img/gedokun_4_3.png"
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
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>まずは一人にさせない</h2>
            <p>
              <span className={styles.segment}>
                人には言えない悩みも、込み上げてくる気持ちも、
              </span>
              <span className={styles.segment}>
                すぐに投稿できるようにします。
              </span>
              <br />
              <span className={styles.segment}>
                同じように悩んでいる仲間と、遠くでゆるやかに繋がります。
              </span>
              <br />
              <span className={styles.segment}>
                gedokunにできることは小さいですが、
              </span>
              <span className={styles.segment}>
                まずは一人にさせないことを目指します。
              </span>
            </p>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>特徴</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <h2>ユーザー登録・返信機能なし</h2>
                  <p>
                    シンプルに悩みを吐き出すだけの場所です。学校や地域の施設の端末から使う少年少女もいます。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>ボタンでゆるやかに呼応</h2>
                  <p>
                    リアクションボタンで反応を返せます。どんな投稿にも否定も肯定もしませんが、「ここにいるよ」ということを伝えます。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>次の手札をさりげなく伝える</h2>
                  <p>
                    投稿内容に応じて、近い経験談や手札をさりげなく提示します。次の一歩を踏み出すための機会をつくります。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>具体的な手段は制限</h2>
                  <p>
                    どんな感情の投稿にも制限はかけていませんが、自殺方法や連絡先などの具体的な情報はNGワードとして投稿できないようになっています。
                  </p>
                </div>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun_4_3_feature.png"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="gedokunの特徴"
                />
              </div>
            </div>
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
              <li>朝からいきなり怒鳴らないでほしい</li>
              <li>家では死んで学校では生きたい</li>
              <li>
                見た目に傷つけたりはされてないけど心の傷は何ヶ所もつけられてるよ
              </li>
            </ul>
            <h2>少年少女からの声</h2>
            <ul className={styles.list}>
              <li>「友達には話せないけど、ここなら悩みを吐き出せる」</li>
              <li>「家のことで悩んでるの、私だけじゃないんだ」</li>
              <li>「みんなありがとう、がんばろうね」</li>
              <li>「スマホの利用制限かけられているけどこれなら使える」</li>
            </ul>
            <h2>利用者数</h2>
            <ul className={styles.list}>
              <li>月間4,000人</li>
              <li>中高生の利用が多い</li>
              <li>学校が始まる前、昼休憩、放課後〜夜の利用が多い。</li>
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
