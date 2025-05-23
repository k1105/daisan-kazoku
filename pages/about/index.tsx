import Layout from "../layout";
import styles from "@/styles/About.module.scss";

import Table from "./Table";
import CardContainer from "./CardContainer";
import ArticleCard from "./ArticleCard";
import Statement from "./Statement";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import BlockContainer from "@/components/BlockContainer";
import Image from "next/image";
import Organization from "./Organization";
import {FukidashiBottom} from "@/components/icons/FukidashiBottom";
const About = () => {
  return (
    <>
      <Layout pageTitle="第3の家族とは" headline="第3の家族とは">
        <div>
          <div className={styles.jumbotron}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>Vision</h1>
            </div>
            <div className={styles.rightSideItem}>
              <h2>どんな家族も生きやすい社会を構築する</h2>
              <p>
                <span className={styles.segment}>
                  第3の家族は、親が悪いとも思っていません。
                </span>
                <span className={styles.segment}>
                  一方で、「親ガチャ」「毒親」といった言葉が流行るのは、
                </span>
                <span className={styles.segment}></span>
                若者から見てそういった社会になっているからでしょう。親も子も揺らぎがあり、それを受け止められるような社会構築を目指します。
              </p>
            </div>
          </div>

          <BlockContainer color={"green"}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>やること</h1>
            </div>
            <div className={styles.rightSideItem}>
              <section>
                <h2>自分の居場所を見つけるプラットフォーム</h2>
                <h3>1：Web事業</h3>
                <p>悩みを吐き出し、手札を増やす。</p>
                <div
                  className={styles.serviceCardContainer}
                  style={{margin: "20px 0"}}
                >
                  <ServiceCard
                    title="gedokun"
                    path="/service/gedokun"
                    image="/img/gedokun_4_3.png"
                  />
                  <ServiceCard
                    title="nigeruno"
                    path="/service/nigeruno"
                    image="/img/nigeruno_4_3.png"
                  />
                </div>

                <h3>2：イベント事業</h3>
                <p>点と点を繋いで生きていく。</p>
                <div
                  className={styles.serviceCardContainer}
                  style={{margin: "20px 0"}}
                >
                  <ServiceCard
                    title="家庭環境データ"
                    path="/service/katei-kankyo-data"
                    image="/img/katei-data_4_3.png"
                  />
                  <ServiceCard
                    title="裏母の日"
                    path="/service/urahaha"
                    image="/img/urahaha_4_3.png"
                  />
                  <ServiceCard
                    title="音楽ライブ"
                    path="/service/daisan-live"
                    image="/img/live_4_3.png"
                  />
                </div>
                <h3>3：社会構築事業</h3>
                <p>問題を根本的に解決する。</p>
                <div
                  className={styles.serviceCardContainer}
                  style={{margin: "20px 0"}}
                >
                  <ServiceCard
                    title="社会構築事業"
                    path="/service/shakai-kochiku"
                    image="/ogp.png"
                  />
                </div>
              </section>
              <section>
                <h2>問題を根本的に解決するための社会構築</h2>
                <h3>はざまの声を集める</h3>
                <p>
                  今まで一人一人が抱えていた声を、第3の家族のプラットフォームを通じてかたちにします。見えなかった社会問題を可視化します。
                </p>
                <h3>政策・文化提言</h3>
                <p>
                  はざまの声をもとに、政策・文化・都市計画などのシステムへの提言を目指していきます。
                </p>
              </section>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>コンセプト</h1>
            </div>
            <div className={styles.rightSideItem}>
              <section>
                <h2>寄り添わない支援</h2>
                <p>
                  「寄り添い」が大事にされてきた既存の支援の中で取りこぼされてきたはざまの少年少女たちがいます。
                  <br />
                  寄り添う居場所に辿り着いてもらうためにも、構えとしては「寄り添わない」。
                </p>
              </section>

              <section>
                <h2>少年少女が「うざい」と思うことはしない</h2>
                <ul className={styles.list}>
                  <li>支援らしくしない</li>
                  <ul className={styles.list}>
                    <li>真面目な入り口にしない</li>
                    <li>最初から指導員・相談員は置かない</li>
                    <li>温かみのあるデザインにしない</li>
                  </ul>
                </ul>
              </section>
              <section>
                <h2>時間に解決させる</h2>
                <ul className={styles.list}>
                  <li>ふとしたタイミングで前を向ける時が来る。</li>
                  <li>しんどさが蓄積すると、思うように進めない。</li>
                  <li>親も子も時間とともに成長する。</li>
                </ul>
              </section>
            </div>
          </BlockContainer>

          <BlockContainer color={"gray"}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>対象者</h1>
            </div>
            <div className={styles.rightSideItem}>
              <section>
                <h2>家庭環境問題のはざまで悩む少年少女</h2>
                <ul className={styles.list}>
                  <li>家庭環境に悩みを抱える少年少女は約20%</li>
                  <li>虐待まではいかず、既存の支援の枠組みに当てはめにくい</li>
                  <li>小学生〜大学生くらいの男女（メインは中高生）</li>
                </ul>
              </section>
              <section>
                <h2>対象者の悩み</h2>
                <CardContainer />
              </section>
              <section>
                <h2>将来のリスク</h2>
                <p>
                  はざまだから何もしなくていいわけではなく、以下のようなリスクがあります。予防が重要です。
                </p>
                <ul className={styles.list}>
                  <li>虐待に深刻化</li>
                  <li>精神疾患</li>
                  <li>自傷行為</li>
                  <li>非行</li>
                  <li>孤独孤立</li>
                  <li>就労の困難</li>
                  <li>自殺</li>
                </ul>
              </section>
              <section>
                <h2>問題の難しさ</h2>
                <h3>少年少女の複雑な心境</h3>
                <p style={{marginBottom: "3rem"}}>
                  問題の程度としてもはざまであり、思春期やモラトリアム期間の少年少女たちには、以下のような複雑な心境があります。
                </p>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    width: "40rem",
                    maxWidth: "90vw",
                  }}
                >
                  <Statement state="大ごとにしたくない" />
                  <Statement state="友達に知られたくない" />
                  <br />
                  <Statement state="心配かけたくない" />
                  <Statement state="自分は支援してもらうほどではない" />
                  <Statement state="自分よりつらい子はもっといる" />
                  <Statement state="大人は信用できない" />
                  <Statement state="どうせ助けてくれない" />
                  <Statement state="自分で頑張りたい" />
                  <Statement state="良い子でいたい" />
                </div>
                <h3>親が悪いわけではない</h3>
                <p>
                  子を育てることが親だけになりやすい社会、ステータスや評価が求められやすい社会など、親が悪い訳ではなく多様な社会課題に起因しています。
                </p>
              </section>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>少年少女が見つける居場所</h1>
            </div>
            <div className={styles.rightSideItem}>
              <p>
                見つける居場所は人それぞれです。人でもモノでも自分自身でも。
              </p>
              <div className={styles.commentContainer}>
                <div>
                  <div className={styles.commentUpper}>
                    <p>
                      受験合格しました。
                      <br />
                      <span className={styles.segment}>
                        今は親とも落ち着いて話せるように
                      </span>
                      <span className={styles.segment}>なりました。</span>
                    </p>
                  </div>
                  <div className={styles.commentLower}>
                    <p>Aさん 当時18歳</p>
                    <FukidashiBottom
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fill: "var(--green)",
                        marginTop: "-0.5rem",
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.commentUpper}>
                    <p>
                      <span className={styles.segment}>
                        意外とお父さんに相談してないことに気づいて、
                      </span>
                      <span className={styles.segment}>
                        話したら味方になってくれました。
                      </span>
                    </p>
                  </div>
                  <div className={styles.commentLower}>
                    <p>Bさん 当時19歳</p>
                    <FukidashiBottom
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fill: "var(--green)",
                        marginTop: "-0.5rem",
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.commentUpper}>
                    <p>
                      実家にいるけど、自分の気持ちを伝えられるようになって、親との関係が改善しました。
                    </p>
                  </div>
                  <div className={styles.commentLower}>
                    <p>Cさん 当時19歳</p>
                    <FukidashiBottom
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fill: "var(--green)",
                        marginTop: "-0.5rem",
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.commentUpper}>
                    <p>
                      彼氏と結婚しました。親との仲裁にも入ってくれて助かりました。
                    </p>
                  </div>
                  <div className={styles.commentLower}>
                    <p>Aさん 当時18歳</p>
                    <FukidashiBottom
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fill: "var(--green)",
                        marginTop: "-0.5rem",
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.commentUpper}>
                    <p>身の危険を感じたので公的な支援にお世話になりました。</p>
                  </div>
                  <div className={styles.commentLower}>
                    <p>Bさん 当時18歳</p>
                    <FukidashiBottom
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fill: "var(--green)",
                        marginTop: "-0.5rem",
                        marginRight: "2rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlockContainer>

          <BlockContainer>
            <Organization />
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>団体概要</h1>
            </div>
            <div className={styles.rightSideItem}>
              <Table />
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>受賞・採択</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className="awards-container">
                <div className="award-wrapper">
                  <div className="award-logo-wrapper">
                    <Image
                      src="/img/award/GOOD DESIGN NEW HOPE AWARD 2022.png"
                      alt="GOOD DESIGN NEW HOPE AWARD ロゴ"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <a
                    href="https://newhope.g-mark.org/award2022.html"
                    className={styles.externalLink}
                  >
                    GOOD DESIGN NEW HOPE AWARD 2022 最優秀賞
                  </a>
                </div>
                <div className="award-wrapper">
                  <div className="award-logo-wrapper">
                    <Image
                      src="/img/award/Forbes JAPAN 30 UNDER 30.png"
                      alt="Forbes JAPAN 30 UNDER 30 ロゴ"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <a
                    href="https://forbesjapan.com/feat/30under30/2023/honorees/"
                    className={styles.externalLink}
                  >
                    Forbes JAPAN 30 UNDER 30 2023「世界を変える30歳未満」
                  </a>
                </div>
              </div>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>ネットワーク</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://www.shinkoren.or.jp/"
                    className={styles.externalLink}
                  >
                    新公益連盟
                  </a>
                  加盟団体
                </li>
                <li>
                  <a
                    href="https://icf.mri.co.jp/"
                    className={styles.externalLink}
                  >
                    未来共創イニシアティブ
                  </a>
                  一般会員
                </li>
              </ul>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>助成金情報</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className="awards-container">
                <div className="award-wrapper">
                  <div className="award-logo-wrapper">
                    <Image
                      src="/img/REEP.png"
                      alt="REEP ロゴ"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p>2023年度 SVP東京 投資・協働先</p>
                </div>
                <div className="award-wrapper">
                  <div className="award-logo-wrapper">
                    <Image
                      src="/img/kao.png"
                      alt="花王 ロゴ"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <p>2023年度 花王社会起業塾</p>
                </div>

                <div className="award-wrapper">
                  <div className="award-logo-wrapper">
                    <Image
                      src="/img/akai-hane.png"
                      alt="赤い羽根 ロゴ"
                      fill
                      priority
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p>
                    2023年度 赤い羽根
                    ポスト・コロナ（新型感染症）社会に向けた福祉活動応援キャンペーン(第8回)
                  </p>
                </div>
              </div>

              <Link href="/about/grant">
                <div className={styles.innerLinkWrapper}>
                  <p>助成金情報詳細</p>
                </div>
              </Link>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>メディア・登壇・出展</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className={styles.articleCardContainer}>
                <ArticleCard
                  date="2023.08"
                  headline="Forbes
                  JAPAN「自分の居場所はほかにもある。家庭環境に悩む若者を支える」"
                  url="https://forbesjapan.com/articles/detail/65699"
                  image="/img/article-thumbnail/forbesJP.webp"
                />
                <ArticleCard
                  date="2023.12"
                  headline="NHK NEWS
                  おはよう日本「”家にいると苦しい”から脱出するための「あなたを助ける手札」」"
                  url="https://www.nhk.jp/p/ohayou/ts/QLP4RZ8ZY3/blog/bl/pzvl7wDPqn/bp/pkZZqxOXmk/"
                  image="https://daisan-kazoku.vercel.app/ogp.png"
                />
                <ArticleCard
                  date="2024.02"
                  headline='Yahoo! JAPAN
                  SDGs「4人に1人の若者が「家に居場所がない」。"寄り添わない"支援で生き抜くための手札を
                  #豊かな未来を創る人」'
                  url="https://sdgs.yahoo.co.jp/originals/198.html"
                  image="https://daisan-kazoku.vercel.app/ogp.png"
                />
              </div>
              <Link href="/about/media">
                <div className={styles.innerLinkWrapper}>
                  <p>メディア・登壇・出展一覧</p>
                </div>
              </Link>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>定款・諸規程</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1l7ols46aMudmrzikGKUFP3qcmhx3JJz5/view"
                    className={styles.pdfLink}
                  >
                    定款
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1Pd-YaX4j6XSO6mgTSyGQFf6xQQ94yFDP/view"
                    className={styles.pdfLink}
                  >
                    サービス利用規約
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1IX0AHYZBKvxX5DllXdJH3gMyXv_-0UGm/view"
                    className={styles.pdfLink}
                  >
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>収支報告</h1>
            </div>
            <div className={styles.rightSideItem}>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1T7zzgp11uI9OdJaxCvksIdbXhmu7CX6G/view"
                    className={styles.pdfLink}
                  >
                    2023年度（第2期）活動計算書等
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1FrUFNWx2S5hh1CRSPyCXEgaSZl6Zvier/view"
                    className={styles.pdfLink}
                  >
                    2022年度（第1期）活動計算書等
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1cikXYCuBAtLl23RehEtnPrrxBgqz7l5e/view"
                    className={styles.pdfLink}
                  >
                    2023年度（第2期）事業報告書
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1lkr0S-2GXQ-HHljjkHNB1q6NeapmgA0W/view"
                    className={styles.pdfLink}
                  >
                    2022年度（第1期）事業報告書
                  </a>
                </li>
                {/* <li>2024年度（第2期）活動計算書等.pdf</li>
              <li>2024年度（第2期）事業報告書.pdf</li> */}
              </ul>
            </div>
          </BlockContainer>
        </div>
        <style jsx>{`
          .awards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 5rem;
          }

          .award-wrapper {
            display: flex;
            width: 15rem;
            flex-direction: column;
            gap: 1rem;
            text-align: ceter;
          }
          .award-logo-wrapper {
            width: 15rem;
            height: 15rem;
            position: relative;
          }

          @media screen and (max-width: 600px) {
            .awards-container {
              gap: 1rem;
            }
            .award-wrapper {
              width: 10rem;
            }

            .award-logo-wrapper {
              width: 10rem;
              height: 10rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

export default About;
