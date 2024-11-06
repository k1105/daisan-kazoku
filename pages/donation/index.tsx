import Layout from "../layout";
import styles from "@/styles/Article.module.scss";
import BlockContainer from "@/components/BlockContainer";
import Link from "next/link";

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
              <h2>「別に殴られてないし、虐待ってほどではない」</h2>
              <p>虐待ほどではない「はざま」があります。</p>
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
        </>
      </Layout>
    </>
  );
}
