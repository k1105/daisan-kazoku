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
            <p>悩みを「解毒」する掲示板</p>
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
      <div  className={styles.blockContainerColumn}>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>コンセプト</h1>
          </div>
          <div className={styles.rightSideItem}>
            <h2>少年少女の裏の居場所</h2>
            <p>
              <span className={styles.segment}>
                同じように悩んでいる仲間と、ゆるやかに繋がります。
              </span>
              <br />
              <span className={styles.segment}>
                「仲間がいる」という事実が暗闇にそっと光を照らします。
              </span>
              <br />
              <span className={styles.segment}>
                まずは「生きてみよう」と思えるように。
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
                  <h2>返信なし</h2>
                  <p>
                    悩みを吐き出すだけで、返信や相談はできません。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>完全匿名</h2>
                  <p>
                    個人情報は取得しません。利用登録もなく、誰でもすぐに使えます。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>わかる・エールボタン</h2>
                  <p>
                    「その気持ちわかる」「がんばれ」というメッセージを、そっと伝えます。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>AIによる推薦</h2>
                  <p>
                    投稿内容に応じて、必要な情報をnigerunoと紐付け、投稿の下に表示します。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>安全フィルター</h2>
                  <p>
                    危険な情報や安心の場を阻害する投稿は、できないようになっています。
                  </p>
                </div>
                <div className={styles.card}>
                  <h2>配信</h2>
                  <p>
                    雑談やお悩み相談。文章だけでは伝えられないことを伝え合います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>悩みの声</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <ul className={styles.list}>
                <li>週7で習い事。苦しい。</li>
                <li>会話が苦手。友達が欲しい。</li>
                <li>過干渉でGPSつけられてる。</li>
                <li>ゲイであることを馬鹿にされた。</li>
                <li>母親の不倫発見した。気持ち悪い。</li>
                <li>パパが病んでる。泣かないで。</li>
              </ul>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun-post-before.png"
                  fill
                  priority
                  alt="投稿内容"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>嬉しい声</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <ul className={styles.list}>
                <li>ありがとう、みんなで生きよう。</li>
                <li>応援してもらえたの、はじめて。</li>
                <li>みんながいるから頑張れる。</li>
                <li>初めて本音を言えた。</li>
              </ul>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun-post-after.png"
                  fill
                  priority
                  alt="投稿内容"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>配信</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>どうしようもないを分け合う</h2>
                <p>
                  <span className={styles.segment}>
                    夜、朝、日中など、配信を週1〜5で行う。
                  </span>
                  <span className={styles.segment}>
                    みんなでモヤモヤを共有したり雑談したり。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun-live.png"
                  fill
                  priority
                  alt="gedokunのライブの画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>実績</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <div className={styles.flexContainer}>
              <div>
                <h2>1人じゃないって思えた</h2>
                <p>
                  <span className={styles.segment}>
                    抱え込んでいた気持ちを、誰かに受け止めてもらう。
                  </span>
                  <span className={styles.segment}>
                    支援の力は弱くても、まずは1人にさせない。
                  </span>
                  <span className={styles.segment}>
                    NNK、朝日新聞、日本テレビなど掲載多数。
                  </span>
                </p>
              </div>
              <div className={styles.insertImageWrapper}>
                <Image
                  src="/img/gedokun-newzero.png"
                  fill
                  priority
                  alt="gedokunの利用者の画像"
                />
              </div>
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>評価指標</h1>
          </div>
          <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
            <h2>ACEをPCEで克服する</h2>
            <p>
              利用する少年少女のほとんどはACE（逆境的体験）を抱えています。ACEがある場合に、PCE（肯定的体験）があると、さまざまなリスクを低減することが明らかになっています。サイトを通じてPCEを獲得する機会を提供しています。
            </p>
            <div
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "21/9",
                marginTop: "1rem",
                position: "relative",
              }}
            >
              <Image
                src="/img/geodkun-model.png"
                fill
                priority
                alt="gedokunの支援モデル"
              />
            </div>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className={styles.leftSideItem}>
            <h1 className={styles.headline}>利用の様子</h1>
          </div>
          <div className={styles.rightSideItem}>
            <ul className={styles.list}>
              <li>全国からの利用</li>
              <li>中高生の利用が多い</li>
              <li>毎日利用する子〜嫌なことがあった時に戻ってくる子</li>
              <li>学校が始まる前の朝、昼休憩、放課後〜夜の利用が多い。</li>
            </ul>
          </div>
        </BlockContainer>
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

export default Gedokun;
