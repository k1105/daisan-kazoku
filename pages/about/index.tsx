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
              <h2  className={styles.mlNarrow}><span className={styles.mlNarrowSp}>「どうしようもない」を</span><br className={styles.br}/>抱える少年少女が<br/><span className={styles.mlNarrowSp}>「大丈夫」になるまで</span><br className={styles.br}/>一人にさせない</h2>
              <p>
                <span className={styles.segment}>
                  解決が難しいこと、正論ではどうにもならないこと、やり場のない思い。
                </span>
                <span className={styles.segment}>
                  「どうしようもない」ことを「大丈夫」と思えるまで一緒にいる。
                </span>
                <span className={styles.segment}>
                  自分なりの答えを見つける、別の道を探す、それでも生きたいと思える。
                </span>
              </p>
            </div>
          </div>
          <BlockContainer  color={"gray"}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>対象</h1>
            </div>
            <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
              <h2>どうしようもないを<br className={styles.br}/>抱える少年少女</h2>
              <p>
                いろんな社会構造のしわよせから、家庭環境・学校問題・精神疾患などの問題に。問題の大小も種類もそれぞれですが、共通するのは「どうしようもない」気持ち。
              </p>
              <div  className={styles.blockContainerColumnNarrow}>
              <ul className={styles.list}>
                <li>過干渉、理想の押し付け、過教育、きょうだい比較</li>
                <li>両親の不仲、親または子の精神疾患・発達障害</li>
                <li>虐待、いじめ、不登校、ヤングケアラー、LGBTQ+、貧困</li>
              </ul>
              <div
                style={{
                  width: "100%",
                  maxWidth:"1300px",
                  height: "auto",
                  aspectRatio: "1200/767",
                  marginTop: "1rem",
                  position: "relative",
                }}
              >
                <Image
                  src="/img/user.png"
                  fill
                  priority
                  alt="gedokunの支援モデル"
                />
              </div>
             <div className={styles.flexContainer}>
                <div className={styles.cardContainer}>
                  <div className={styles.card}>
                    <h2>自殺の増加</h2>
                    <p>
                      こどもの自殺は上昇傾向。2024年は過去最多の529人。
                    </p>
                  </div>
                  <div className={styles.card}>
                    <h2>虐待の世代間連鎖</h2>
                    <p>
                      虐待は、親、祖父母と続いている場合が多く、未だ連鎖が続いている。
                    </p>
                  </div>
                  <div className={styles.card}>
                    <h2>不登校の増加</h2>
                    <p>
                      不登校は増加傾向。2024年度は過去最多の35万人。
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer color={"green"}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>やること</h1>
            </div>
            <div className={styles.rightSideItem}>
              <section>
                <h2>第1の家族か第2の家族に<br />居場所を見つける</h2>
                <p>
                  <span className={styles.segment}>
                    第1の家族は「本人の家族」、第2の家族は「地域社会」
                  </span>
                  <span className={styles.segment}>
                    第3の家族は「顔の見えない他者」。
                  </span>
                  <span className={styles.segment}>
                    最終的には手が届くところに拠り所を見つけられるように。
                  </span>
                </p>
              </section>
              <section  className={styles.rightSideItemContarner}>
                <div>
                  <h3>1：Web事業</h3>
                  <div
                    className={styles.serviceCardContainer}
                    style={{margin: "16px 0"}}
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
                </div>
                <div>
                  <h3>2：イベント事業</h3>
                  <div
                    className={styles.serviceCardContainer}
                    style={{margin: "16px 0"}}
                  >
                    <ServiceCard
                      title="裏〇〇の日"
                      path="/service/ura"
                      image="/img/urahaha_4_3.png"
                    />
                    <ServiceCard
                      title="インフルエンサーコラボ"
                      path="/service/entertainment"
                      image="/img/live_4_3.png"
                    />
                  </div>
                </div>
                <div>
                  <h3>3：みんなで世界を変える</h3>
                    <div
                    className={styles.serviceCardContainer}
                    style={{margin: "16px 0"}}
                    >
                    <ServiceCard
                    title="第3の家族会議"
                    path="/service/daisan-kaigi"
                    image="/img/daisan-kaigi.png"
                        />
                    <ServiceCard
                      title="家庭環境データ"
                      path="/service/katei-kankyo-data"
                      image="/img/katei-data_4_3.png"
                    />
                    <ServiceCard
                      title="登壇・出演"
                      path="/service/appearances"
                      image="/img/appearances.png"
                    />
                    </div>
                </div>
              </section>
            </div>
          </BlockContainer>
          <div  className={styles.blockContainerColumn}>
            <BlockContainer>
              <div className={styles.leftSideItem}>
                <h1 className={styles.headline}>コンセプト1</h1>
              </div>
              <div className={styles.rightSideItem}>
                <h2>寄り添わない支援</h2>
                <p>
                  <span className={styles.segment}>
                    既存の支援に繋がらない少年少女に対して、
                  </span>
                  <br />
                  <span className={styles.segment}>
                    大人が専門的に支援をするのではなく、
                  </span>
                  <br />
                  <span className={styles.segment}>
                    少年少女やかつて悩んだ先輩との共助の輪をつくります。
                  </span>
                  <br />
                  <span className={styles.segment}>
                    「信じてもいいな」と思ってもらえるまで、小さくあの手この手を尽くします。
                  </span>
                </p>
              </div>
            </BlockContainer>
            <BlockContainer>
              <div className={styles.leftSideItem}>
                <h1 className={styles.headline}>コンセプト2</h1>
              </div>
              <div className={styles.rightSideItem}>
                <h2>今 ＜ 未来の根本的解決</h2>
                <p>
                  <span className={styles.segment}>
                    少年少女の問題は複雑に絡み合い、ときに解決困難。
                  </span>
                  <br />
                  <span className={styles.segment}>
                    根本的解決が難しいときは、まずはやり過ごせるように。
                  </span>
                  <br />
                  <span className={styles.segment}>
                    彼ら彼女らが大人になったときに、楽しく生きれる、問題を連鎖させないように、未来の根本的解決をすることを目指します。
                  </span>
                </p>
              </div>
            </BlockContainer>
          </div>
          <BlockContainer  color={"gray"}>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>めざすこと</h1>
            </div>
            <div className={`${styles.rightSideItem} ${styles.fullWidth}`}>
              <h2><span className={styles.mlNarrow}>「大丈夫」を見つけ</span><br/>第1の家族か第2の家族へ</h2>
              <p>
                <span className={styles.segment}>
                  まずはしんどい状況でも「大丈夫」と思えるような、
                </span>
                <span className={styles.segment}>
                  自分なりの答えを見つける、別の道を探す、それでも生きたいと思える。
                </span>
                <span className={styles.segment}>
                  そこから、自分の手が届く範囲に拠り所を手に入れます。
                </span>
              </p>
              <div  className={styles.blockContainerColumnNarrow}>
              <ul className={styles.list}>
                <li>母の過干渉がしんどかったけど、「自分は自分、親は親」だと思えた。自分の気持ちを伝え、今は落ち着いて話せるようになった。</li>
                <li>不登校で友達がいなかったけど、gedokunでみんなと一緒になれた。話すことに少し自信が持てた。今は通信制高校をがんばっている。</li>
                <li>教育に厳しいけど、自分も医者になりたいし、親の仕事は尊敬している。無理しすぎず頑張ることにした。受験が終わり、今は家族仲が良くなった。</li>
                <li>殴られるのは当たり前だと思っていたけど、虐待だということを知り、児童相談所に連絡した。今は施設で暮らしている。</li>
              </ul>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1920/1080",
                  marginTop: "1rem",
                  position: "relative",
                  maxWidth:"1300px"
                }}
              >
                <Image
                  src="/img/kv.png"
                  fill
                  priority
                  alt="gedokunの支援モデル"
                />
              </div>
              </div>
            </div>
          </BlockContainer>
          <div  className={styles.blockContainerColumn}>

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
                <h1 className={styles.headline}>受賞</h1>
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
                      target="_blank"
                      rel="noopener"
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
                      target="_blank"
                      rel="noopener"
                    >
                      Forbes JAPAN 30 UNDER 30 2023「世界を変える30歳未満」
                    </a>
                  </div>
                  <div className="award-wrapper">
                    <div className="award-logo-wrapper">
                      <Image
                        src="/img/award/jci.jpg"
                        alt="横浜市男女共同参画貢献表彰"
                        fill
                        priority
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <a
                      href="https://www.jaycee.or.jp/toyp/project/%E5%A5%A5%E6%9D%91%E6%98%A5%E9%A6%99/"
                      className={styles.externalLink}
                      target="_blank"
                      rel="noopener"
                    >
                      第39回 青年版国民栄誉賞 文部科学大臣賞
                    </a>
                  </div>
                  <div className="award-wrapper">
                    <div className="award-logo-wrapper">
                      <Image
                        src="/img/award/yokohama-award.jpg"
                        alt="横浜市男女共同参画貢献表彰"
                        fill
                        priority
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <a
                      href="https://www.city.yokohama.lg.jp/city-info/seisaku/torikumi/danjo/koken/koukensha.html"
                      className={styles.externalLink}
                      target="_blank"
                      rel="noopener"
                    >
                      横浜市男女共同参画貢献表彰 令和６年度 ユース賞
                    </a>
                  </div>
                </div>
              </div>
            </BlockContainer>
            <BlockContainer>
              <div className={styles.leftSideItem}>
                <h1 className={styles.headline}>メディア</h1>
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
                    date="2025.09"
                    headline="朝日新聞 朝刊
                    ネットだけに本音 子どもの自殺分析"
                    url="#"
                    image="https://images.microcms-assets.io/assets/91a2d34a6239451d904d539ac5884d96/c0014f1c945c425ebab3907436eba105/%E6%9C%9D%E6%97%A5%E6%96%B0%E8%81%9E.png"
                  />
                  <ArticleCard
                    date="2024.12"
                    headline="ハートネットＴＶ♯家しんどい〜家族の悩み ゆったり語ろう〜"
                    url="https://www.nhk.jp/p/heart-net/ts/J89PNQQ4QW/episode/te/37LZJXXQK4/"
                    image="https://images.microcms-assets.io/assets/91a2d34a6239451d904d539ac5884d96/66c99f483cd046f6b9415ea970a9805b/heart-net.png"
                  />
                </div>
                <Link href="/about/media">
                  <div className={styles.innerLinkWrapper}>
                    <p>メディア・登壇</p>
                  </div>
                </Link>
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
                    <p>
                      休眠預金事業 2023
                      年度早期介入助成ICTを核とした早期介入のエコシステムの構築
                    </p>
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
                <h1 className={styles.headline}>ネットワーク</h1>
              </div>
              <div className={styles.rightSideItem}>
                <ul className={`${styles.list} ${styles.mt0}`}>
                  <li>
                    <a
                      href="https://www.shinkoren.or.jp/"
                      className={styles.externalLink}
                      target="_blank"
                      rel="noopener"
                    >
                      新公益連盟
                    </a>
                    加盟団体
                  </li>
                  <li>
                    <a
                      href="https://icf.mri.co.jp/"
                      className={styles.externalLink}
                      target="_blank"
                      rel="noopener"
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
                <h1 className={styles.headline}>経歴</h1>
              </div>
              <div className={styles.rightSideItem}>
                <ul className={`${styles.list} ${styles.mt0}`}>
                  <li>2021.03 gedokunリリース</li>
                  <li>2022.04 nigerunoクラファン</li>
                  <li>2022.05 nigerunoリリース</li>
                  <li>2022.07 家庭環境データ2022（旧毒親白書）</li>
                  <li>2023.03 NPO法人第3の家族設立</li>
                  <li>2023.05 裏母の日2023</li>
                  <li>2023.03 NPO法人第3の家族設立</li>
                  <li>2023.11 家庭環境データ2023</li>
                  <li>2024.03 第3の家族会議2024</li>
                  <li>2024.05 Dasi3 Live 2024</li>
                  <li>2024.05 裏母の日2024</li>
                  <li>2025.03 第3の家族会議2025</li>
                  <li>2025.03 gedokun地域オフ会</li>
                  <li>2025.05 裏母の日2025</li>
                  <li>2025.07 認定NPO法人化</li>
                  <li>2025.07 夏休みクラウドファンディング</li>
                  <li>2025.08 夏休み毎日配信2025</li>
                </ul>
              </div>
            </BlockContainer>
          </div>
        </div>
        <style jsx>{`
          .awards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 4rem;
            margin-bottom: 1rem;
          }

          .award-wrapper {
            display: flex;
            width: 15rem;
            flex-direction: column;
            gap: 1rem;
            text-align: ceter;
          }
          .award-logo-wrapper {
            position: relative;
            aspect-ratio: 1 / 1;
          }

          @media screen and (min-width: 1024px) and (max-width: 1300px) {
            .awards-container {
              gap: 3rem;
            }
            .award-wrapper{
              width: 11rem;
            }
          }


          @media screen and (min-width: 800px) and (max-width: 1024px) {
            .awards-container {
              width: 90vw !important;
              max-width: 90vw !important;
              gap: 2rem;
            }
            .award-wrapper {
              width: 30%;
            }

            .award-logo-wrapper {
              width: 100%;
            }
          }

          @media screen and (max-width: 800px) {
            .awards-container {
              width: 90vw !important;
              max-width: 90vw !important;
              gap: 2rem;
            }
            .award-wrapper {
              width: 44%;
              
            }

            .award-logo-wrapper {
              width: 100%;
              height: auto;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

export default About;
