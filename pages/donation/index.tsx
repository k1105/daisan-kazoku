import Layout from "../layout";
import styles from "@/styles/Article.module.scss";
import BlockContainer from "@/components/BlockContainer";
import Link from "next/link";
import { PieChart } from "@/components/PieChart";
import { FloatingButton } from "@/components/FloatingButton";
import ArticleCard from "../about/ArticleCard";
import Image from "next/image";
import ServiceCard from "../about/ServiceCard";

export default function Donation() {
  return (
    <>
      <Layout pageTitle="寄付する" headline="">
        <>
          <div className={styles.jumbotron}>
            <h2>
              どんな家族も
              <br />
              生きやすい社会を
              <br />
              構築するために
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
              <ul className={styles.list}>
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
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>体験談</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className="comment-container">
                <div className="comment">
                  <p>
                    テストの点が悪いと、<b>「才能ないね、本当にうちの子？」</b>
                    と言われる。でも<b>それ以外の時は普通</b>の家族って感じだし‥
                  </p>
                </div>
                <div className="comment">
                  <p>
                    <b>自分は女で、好きな子も女の子。</b>
                    <br />
                    こないだ手を繋いで帰っていたら、お母さんに見られてたみたいで、
                    <br />
                    帰ったら<b>「気持ち悪い」</b>って言われた…
                  </p>
                </div>
                <div className="comment">
                  <p>
                    <b>親が最近仲悪くて、</b>私が寝室に戻った後に
                    <br />
                    <b>「子どもがこうなったのはお前のせいだ」と揉めている</b>
                    のを聞いちゃった。
                    <br />
                    私なんていなければよかったんだ…
                  </p>
                </div>
                <div className="comment">
                  <p>
                    服を買う時も、進路を決める時も、何から何まで親が先回りして用意して、
                    <br />
                    結局親に全部決められる…
                    <br />
                    <b>優しさなんだろうけど、自分は何もできないやつだな</b>って…
                  </p>
                </div>
                <div className="comment">
                  <p>
                    妹には優しいのに、俺には勉強も厳しいし、怒られてばっかり。
                    <br />
                    気づいたら、俺を置いてみんなで出かけに行ってたみたい。
                    <br />
                    <b>俺のこと嫌いなんだろうな…</b>
                  </p>
                </div>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>誰にも相談しない間に、極端な選択肢の可能性</h2>
              <p style={{ marginBottom: "2rem" }}>
                第3の家族には、既存の支援を使っていない少年少女が多くいます。
                <br />
                そして、彼ら・彼女らは将来に困難を抱えうるリスクを抱えています。
              </p>
              <div className="diagram-list">
                <p>
                  第3の家族のユーザーのうち、
                  <br />
                  公的支援を使っていない人は
                  <br />
                  約8割
                </p>
                <div className="diagram-container">
                  <PieChart numberList={[80, 20]} />
                </div>
              </div>
              <div className="diagram-list">
                <p>
                  逆境的小児期体験（ACE）の点数が高い （平均2.8点）。
                  <wbr />
                  将来、メンタルヘルスや自殺などのリスクが
                  <wbr />
                  高くなる可能性あり。
                </p>
              </div>

              <div className="comment-container">
                <div className="comment">
                  <p>トー横に行ったら、なんとかなるかな…</p>
                </div>
                <div className="comment">
                  <p>薬を飲めば楽になれるのかな…？</p>
                </div>
                <div className="comment">
                  <p>親に後悔させてやる…！</p>
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
              <h2>自分の居場所を見つけるプラットフォーム</h2>
              <div className="overview-container">
                <Image
                  src="/img/overview.png"
                  alt="第３の家族の全体像"
                  fill
                  priority
                  style={{
                    objectFit: "contain", // or cover
                  }}
                />
              </div>
              <div className="service-section">
                <h3>1：Web事業</h3>
                <p className="description">悩みを吐き出し、手札を増やす。</p>
                <div className="service-container">
                  <div className="service">
                    <h3>悩みを吐き出す場 &#34;gedokun&#34;</h3>
                    <p>匿名で悩みを吐き出し、少しだけ前を向ける場。</p>
                    <div className="thumbnail-container">
                      <Image
                        src="/img/donation/gedokun.png"
                        alt="gedokunのインターフェース"
                        fill
                        priority
                        style={{
                          objectFit: "contain", // or cover
                        }}
                      />
                    </div>
                  </div>

                  <div className="service">
                    <h3>役に立つ手札や経験談 &#34;nigeruno&#34;</h3>
                    <p>社会資源と経験談を集めた情報サイト。</p>
                    <div className="thumbnail-container">
                      <Image
                        src="/img/donation/nigeruno.png"
                        alt="nigerunoのインターフェース"
                        fill
                        priority
                        style={{
                          objectFit: "contain", // or cover
                        }}
                      />
                    </div>
                  </div>
                </div>

                <h3>2：イベント事業</h3>
                <p className="description">点と点を繋いで生きていく。</p>
                <div className="service-container">
                  <div className="service">
                    <h3>こどもの日に行う音楽ライブ</h3>
                    <p>
                      同じような仲間とかつて生きづらさを抱えたアーティストで、最高の1日をつくる。
                    </p>
                    <div className="thumbnail-container">
                      <Image
                        src="/img/live.png"
                        alt="第３の家族ライブ"
                        fill
                        priority
                        style={{
                          objectFit: "contain", // or cover
                        }}
                      />
                    </div>
                  </div>

                  <div className="service">
                    <h3>母の日に行う裏母の日</h3>
                    <p>
                      母の日をどんな気持ちで迎えたらいいのかわからない人のための日。
                    </p>
                    <div className="thumbnail-container">
                      <Image
                        src="/img/donation/urahaha-card.png"
                        alt="裏母の日"
                        fill
                        priority
                        style={{
                          objectFit: "contain", // or cover
                        }}
                      />
                    </div>
                  </div>
                </div>

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
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>「寄り添わない支援」を広げたい</h2>
              <p>
                はざまの少年少女たちは、従来からある「寄り添う支援」で取りこぼされてきました。そこには、以下のような複雑な心境がありました。
              </p>
              <ul className={styles.list}>
                <li>
                  「大ごとにしたくない」「友達に知られたくない」「心配かけたくない」
                </li>
                <li>
                  「自分は支援してもらうほどではない」「自分よりつらい子はもっといる」
                </li>
                <li>「大人は信用できない」「どうせ助けてくれない」</li>
                <li>「自分で頑張りたい」「良い子でいたい」</li>
              </ul>
              <p style={{ margin: "2rem 0" }}>
                そこで、第3の家族は「寄り添わない支援」をつくります。
                <br />
                寄り添わない支援では、以下のことを大切にしています。
              </p>
              <h3>1. 少年少女が「うざい」と思うことはしない</h3>
              <ul className={styles.list}>
                <li>
                  <b>支援らしくしない</b>
                </li>
                <ul className={styles.list}>
                  <li>真面目な入り口にしない</li>
                  <li>最初から指導員・相談員は置かない</li>
                  <li>温かみのあるデザインにしない</li>
                </ul>
              </ul>
              <h3 style={{ marginTop: "2rem" }}>2. 時間に解決させる</h3>

              <ul className={styles.list}>
                <li>ふとしたタイミングで前を向ける時が来る。</li>
                <li>しんどさが蓄積すると、思うように進めない。</li>
                <li>親も子も時間とともに成長する。</li>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>利用者の声</h1>
            </div>
            <div className={styles.rightSideItem}>
              <h2>「私は一人じゃない、もう少し生きてみる」</h2>
              <p style={{ marginBottom: "2rem" }}>
                第3の家族は直接支援は行いませんが、近い仲間とゆるやかに繋がれるような場を設け、次の一歩につなげる情報を提示していくことで、少しずつ前が見えてきます。
              </p>

              <div className="comment-container">
                <div className="comment bright">
                  <p>
                    誰にも言えなかった悩みも、gedokunでみんなから受け入れてもらえたのが嬉しかった。今は大学受験に合格し、親とも落ち着いて話せるようになりました。（当時18歳）
                  </p>
                </div>
                <div className="comment bright">
                  <p>
                    お母さんが怖くてずっと我慢してたけど、nigerunoを見ていたら、お父さんに相談していないことに気づかされた。お父さんに相談したら味方になってくれて、お母さんとの関係をうまくつくれるようになりました。
                    <br />
                    （当時19歳）
                  </p>
                </div>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>なぜ「第3の家族」か</h2>
              <p>
                第3の家族とは、<b>本人の家族（第1の家族）</b>でも、
                <b>地域・学校・友達（第2の家族）</b>でもない、
                <b>第3としての存在</b>のこと。第1の家族も第2の家族も、
                <b>
                  今の時代は忙しくなったり、関係が希薄になったり、求められるステータスや価値観がたくさんあったり
                </b>
                と、昔のようにはいかないことも増えてきているのではないでしょうか。居場所が見つかったら第3の家族のことは忘れてもらって大丈夫ですが、それまでに
                <b>一人にさせない繋ぎ</b>として、第3の家族は存在します。
              </p>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>ご寄付のお願い</h2>
              <p>
                第3の家族の活動は、寄付者の皆様からのご支援によって成り立っています。
                <br />
                今この瞬間も、一人で悩んでいるあの子のために、活動を応援していただけると幸いです。
              </p>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>オプション</h1>
            </div>
            <div className={styles.rightSideItem}>
              <h3>マンスリーサポーター</h3>
              <p style={{ marginBottom: "2rem" }}>
                1日33円からのご寄付で家庭環境問題のはざまで悩む少年少女たちをご支援いただけます。
                はざまの少年少女たちが生きやすくなるための社会づくりの力になります。
              </p>

              <h3>単発寄付</h3>
              <p style={{ marginBottom: "2rem" }}>
                1日33円からのご寄付で家庭環境問題のはざまで悩む少年少女たちをご支援いただけます。
                はざまの少年少女たちが生きやすくなるための社会づくりの力になります。
              </p>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>寄付者の方には</h1>
            </div>
            <div className={styles.rightSideItem}>
              <h3>第3の家族会議へご招待</h3>
              <p style={{ marginBottom: "2rem" }}>
                年1回、第3の家族のこれからについて話し合う第3の家族会議をハイブリッド（対面・オンライン）で開催しています。寄付年度の第3の家族会議にご招待します。
              </p>
              <div className="thumbnail-container option">
                <Image
                  src="/img/donation/reward-1.png"
                  alt="マンスリーサポーターの集合写真"
                  fill
                  priority
                  style={{
                    objectFit: "contain", // or cover
                  }}
                />
              </div>
              <h3>メールでの活動報告</h3>
              <p style={{ marginBottom: "2rem" }}>
                月一回程度、活動の報告をメールでお送りさせていただきます。
              </p>
              <div className="thumbnail-container option">
                <Image
                  src="/img/donation/reward-2.png"
                  alt="メールのアイコン"
                  fill
                  priority
                  style={{
                    objectFit: "contain", // or cover
                  }}
                />
              </div>
            </div>
          </BlockContainer>

          <BlockContainer>
            <div className={styles.leftSideItem}></div>
            <div className={styles.rightSideItem}>
              <h2>なぜ寄付が必要か</h2>
              <h3>少年少女向けサービスで収益化できない</h3>
              <p style={{ marginBottom: "2rem" }}>
                第3の家族の<b>サービスの利用は主に「中学生〜高校生」</b>です。
                <b>有料サービスにしたら使ってもらえなくなる</b>ことはもちろん、
                <b>「悩んでいる自分達を利用してビジネスをしている」</b>
                と思う子も一定数いるので、サイト内広告も使っていません。 また、
                <b>第三者への連携・通報が前提にあると来なくなってしまう</b>
                ような、<b>匿名意識が高い子</b>たちを対象にしているために、
                <b>公的機関から委託費をもらうことも難しい</b>です。
              </p>
              <h3>安全なサービス開発のために費用がかかる</h3>
              <p>
                第3の家族のサービスの見た目はシンプルですが、少年少女たちが安全に次の一歩を踏み出すために、
                <b>小さい工夫やシステムが裏で細やかに設計されています。</b>
                例えば、虐待や自殺リスクが高い投稿には、リスク回避をするための情報がレコメンドされるようにしています。また、
                <b>システム障害が起こらないように</b>するためにも、
                <b>一般の営利企業と近いレベルの開発</b>を行っています。
              </p>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>これまでの活動実績</h1>
            </div>
            <div className={styles.rightSideItem}>
              <p>
                はざまの少年少女たちのために、今何ができるか。
                <br />
                日々、試行錯誤を重ねています。
              </p>
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

              {/* <li>
                  <a
                    href="https://100banch.com/projects/daisan-no-kazoku"
                    className={styles.externalLink}
                  >
                    100BANCH 74期
                  </a>
                </li> */}
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>メディア実績</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className={styles.articleCardContainer}>
                <ArticleCard
                  date="2024.02"
                  headline="テレビ朝日 未来につなぐエール「家庭に居場所がない青少年支援」"
                  url="https://www.tv-asahi.co.jp/mirai_yell/backnumber/0047/"
                  image="https://daisan-kazoku.vercel.app/ogp.png"
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
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>よくいただく質問</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className="qa-wrapper">
                <p className="question">
                  Q. 定額の寄付を止めることはできますか？
                </p>
                <p className="answer">
                  A. はい。いつでもマイページからご解約できます。
                </p>
              </div>
              <div className="qa-wrapper">
                <p className="question">Q. 領収書はもらえますか？</p>
                <p className="answer">
                  A.
                  はい。寄付のお申し込み時に「領収書の発行を希望する」をご選択すると発行することができます。
                </p>
              </div>
              <div className="qa-wrapper">
                <p className="question">Q. 寄附金控除は適応されますか？</p>
                <p className="answer">
                  A. 現在は寄付控除は適応されません。
                  <br />
                  令和6年度より、認定NPO法人申請向けて活動しています。
                </p>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>法人・団体の方へ</h1>
            </div>
            <div className={styles.rightSideItem}>
              <h2>法人・団体からの寄付をご検討中の方へ</h2>
              <p style={{ marginBottom: "2rem" }}>
                法人・団体様からの寄付も一口100,000円から受け付けております。
                <br />
                お問い合わせよりご連絡ください。
              </p>
              <Link href="mailto:info@daisan-kazoku.net">
                <div className={styles.innerLinkWrapper}>
                  <p>お問い合わせ</p>
                </div>
              </Link>
            </div>
          </BlockContainer>
          <BlockContainer>
            <div className={styles.leftSideItem}>
              <h1 className={styles.headline}>ごあいさつ</h1>
            </div>
            <div className={styles.rightSideItem}>
              <div className="greeting">
                <p>
                  第3の家族の活動に興味を持ってくださり、誠にありがとうございます。
                  <wbr />
                  はざまの問題は、未だ解決されていません。
                  <wbr />
                  今まで、なかなか取り組まれてこなかった問題です。
                  <wbr />
                  第3の家族に共感してくださる皆様と、
                  <wbr />
                  共にはざまの少年少女たちを支えていけたら嬉しいです。
                  <wbr />
                  まだまだ、至らない点もありますが、皆様と一緒に考え、
                  <wbr />
                  アップデートしていきたいと思います。
                  これからも第3の家族をよろしくお願いいたします。
                </p>
              </div>

              <div className="profile-container">
                <p className="subtitle">NPO法人第3の家族 代表</p>
                <p className="name">奥村春香</p>
                <p className="description">
                  NPO法人第3の家族代表。弟の自死をきっかけに活動を始める。LINE株式会社Product
                  Designerを経て、学生時代から続けていた第3の家族を2023年にNPO法人化。Forbes
                  JAPAN 30 UNDER 30
                  2023。グッドデザイン・ニューホープ賞最優秀賞、法政大学理系同窓会成績優秀者など。
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
          bottom: 5vh;
          right: 3vw;
        }

        .section {
          margin-bottom: 4rem;
        }
        .diagram-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          p {
            font-size: 1.2rem;
          }
          margin-bottom: 3rem;
        }
        .diagram-container {
        }

        .overview-container {
          height: 15rem;
          width: 100%;
          position: relative;
          margin-bottom: 2rem;
        }

        .thumbnail-container {
          height: 20rem;
          width: 100%;
          position: relative;
        }

        .thumbnail-container.option {
          margin-bottom: 3rem;
        }

        .comment-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .service-section {
          .description {
            margin-bottom: 2rem;
          }
        }

        .service-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .service {
          width: 20rem;
        }

        .comment {
          border-radius: 5px;
          width: 20rem;
          padding: 2rem;
          background-color: var(--light-gray);
        }

        .comment.bright {
          background-color: white;
          border: 1px solid var(--green);
        }

        .qa-wrapper {
          margin-bottom: 1rem;
          .question {
            padding: 1rem;
            background-color: var(--light-gray);
          }
          .answer {
            padding: 1rem;
          }
        }

        .greeting {
          margin-bottom: 2rem;
        }

        .profile-container {
          border: 1px solid var(--light-gray);
          padding: 1rem;
          .subtitle {
            font-size: 0.8rem;
            color: var(--dark-gray);
          }
          .name {
            font-size: 1.2rem;
            font-weight: 400;
            margin-bottom: 1rem;
          }

          .description {
            line-height: 1.3rem;
            margin-bottom: 1rem;
          }
        }

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

          .floating-button-container {
            right: 5vw;
          }
        }
      `}</style>
    </>
  );
}
