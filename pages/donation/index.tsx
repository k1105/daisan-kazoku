import Layout from "../layout";
import styles from "@/styles/Article.module.scss";
import BlockContainer from "@/components/BlockContainer";
import Link from "next/link";
import { PieChart } from "@/components/PieChart";
import { FloatingButton } from "@/components/FloatingButton";

export default function Donation() {
  return (
    <>
      <Layout pageTitle="寄付する" headline="">
        <>
          <div className={styles.jumbotron}>
            <h2>
              家庭環境問題のはざまで
              <br />
              「一人で悩んでいるあの子」のために
              <br />
              ご寄付をお願いします。
            </h2>
          </div>

          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>
                「あの子の家、なんかありそう」
                <br />
                という知り合いいませんでしたか？
              </h2>
              <p>
                家庭が居場所でないと答える少年少女は4人に1人。
                <br />
                第3の家族は<b>とても身近な社会問題</b>に取り組んでいます。
                <br />
                家庭環境問題というと遠く感じるかもしれませんが、
                <br />
                <b>
                  知り合いに「あいつの家厳しそう」「たまにあの子しんどそう」
                </b>
                <br />
                <b>といった知り合いはいませんでしたか？</b>
              </p>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <div className="section">
                <h2>「別に殴られてないし、虐待ってほどではない」</h2>
                <p>虐待ほどではない「はざま」があります。</p>
              </div>
              <ol>
                <li>
                  <b>厳しい理想</b>
                </li>
                <p>教育・就職・結婚などに親の強すぎるこだわりがある。</p>
                <li>
                  <b>過干渉</b>
                </li>
                <p>
                  生活・交友関係・インターネット利用などで必要以上に介入をする。
                </p>
                <li>
                  <b>家族の不仲</b>
                </li>
                <p>
                  親同士・親ときょうだい・親と親戚などが不仲で居心地が悪い。
                </p>
                <li>
                  <b>無理解</b>
                </li>
                <p>メンタルヘルスや性のあり方に寄り添ってもらえない。</p>
              </ol>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>誰にも相談しない間に、極端な選択肢の可能性</h2>
              <p>
                第3の家族には、既存の支援を使っていない少年少女が多くいます。
                <br />
                そして、彼ら・彼女らは将来に困難を抱えうるリスクを抱えています。
              </p>
              <div className="diagram-list">
                <div className="diagram-container">
                  <PieChart numberList={[80, 20]} />
                  <p>
                    第3の家族のユーザーのうち、公的支援を使っていない人は約8割
                  </p>
                </div>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>どんな家族も生きやすい社会を構築するために</h2>
              <div className="section">
                <p>
                  第3の家族は、親が悪いとも思っていません。
                  <br />
                  一方で、「親ガチャ」「毒親」といった言葉が流行るのは、若者から見てそういった社会になっているからでしょう。
                  <br />
                  親も子も揺らぎがあり、それを受け止められるような社会構築を目指します。
                </p>
              </div>
              <div className="section">
                <h3>居場所を見つけるためのプラットフォーム</h3>
                <p>
                  はざまの少年少女たちが居場所を見つけるためのプラットフォームを運営しています。
                </p>
              </div>
              <div className="section">
                <h3>問題を根本的に解決するための社会構築</h3>
                <p>
                  <b>はざまの声を集める</b>
                </p>
                <p>
                  今まで一人一人が抱えていた声を、第3の家族のプラットフォームを通じてかたちにします。見えなかった社会問題を可視化します。
                </p>
                <p>
                  <b>政策・文化提言</b>
                </p>
                <p>
                  はざまの声をもとに、政策・文化・都市計画などのシステムへの提言を目指していきます。
                </p>
              </div>
            </div>
          </BlockContainer>
          <div className="floating-button-container">
            <FloatingButton />
          </div>
        </>
      </Layout>
      <style jsx>{`
        .floating-button-container {
          position: fixed;
          z-index: 99;
          bottom: 10vh;
          right: 3vw;
        }

        .section {
          margin-bottom: 4rem;
        }
        .diagram-list {
          display: flex;
          justify-content: space-between;
        }
        .diagram-container {
          margin: 4rem 0 0;
          width: 45%;
          p {
            margin: 1.5rem auto 0;
            text-align: center;
            width: 80%;
            font-size: 0.8rem;
            line-height: 1rem;
            color: var(--dark-gray);
          }
        }

        @media screen and (max-width: 600px) {
          .floating-button-container {
            right: 5vw;
          }
        }
      `}</style>
    </>
  );
}
