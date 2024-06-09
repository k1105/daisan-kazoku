import Layout from "../layout";
import Link from "next/link";

import Table from "./Table";
import { CardContainer } from "./CardContainer";
import ArticleCard from "../ArticleCard";

const About = () => {
  return (
    <>
      <Layout pageTitle="第3の家族とは">
        <div>
          <div className="jumbotron">
            <h1>Vision</h1>

            <h2>
              自分の居場所は、
              <br />
              どこかにある。
            </h2>
            <p>
              第1の家族（本人の家族）か第2の家族（友達・学校・地域）のどこかに居場所を見つけてもらえるように。第3の家族は、それをサポートする裏方です。
            </p>
          </div>

          <div className="article-container">
            <h1 className="headline">対象者</h1>

            <h2>家庭環境問題のはざまで悩む少年少女</h2>
            <ul>
              <li>家庭が居場所でない少年少女は4人に1人</li>
              <li>虐待まではいかず、既存の支援の枠組みに当てはめにくい</li>
              <li>中学生〜大学生くらいの男女</li>
            </ul>

            <h2>対象者の悩み</h2>
            <CardContainer />

            <h2>将来のリスク</h2>
            <p>
              はざまだから何もしなくていいわけではなく、以下のようなリスクがあります。早期介入が重要です。
            </p>
            <ol>
              <li>自己肯定感の低下</li>
              <li>心の病気</li>
              <li>依存症（特に人間関係）</li>
              <li>自傷行為</li>
              <li>非行（夜の街・薬）</li>
              <li>働くことが困難（体調・コミュニケーションの不得手）</li>
              <li>自殺</li>
            </ol>

            <h2>問題の難しさ</h2>

            <h3>少年少女の複雑な心境</h3>
            <p>
              問題の程度としてもはざまであり、思春期やモラトリアム期間の少年少女たちには、以下のような複雑な心境があります。
            </p>
            <ul>
              <li>
                「大事にしたくない」「友達に知られたくない」「心配かけたくない」
              </li>
              <li>
                「自分は支援してもらうほどではない」「自分よりつらい子はもっといる」
              </li>
              <li>「大人は信用できない」「どうせ助けてくれない」</li>
            </ul>

            <h3>親が悪いわけではない</h3>
            <p>
              子を育てるのが親だけになりやすい社会、ステータスや評価が求められやすい社会など、親が悪い訳ではなく多様な社会課題に起因しています。親子関係に直接介入することだけが正解ではないでしょう。
            </p>
          </div>

          <div className="article-container">
            <h1 className="headline">やること</h1>

            <h2>居場所を見つけるためのプラットフォーム</h2>
            <p>
              第1の家族（本人の家族）か第2の家族（友達・学校・地域）のどこかに居場所を見つけてもらうためのプラットフォームを運営します。
            </p>

            <h3>1：Web事業</h3>
            <p>デザイン・テクノロジーによって日常を支えます。</p>
            <p>
              <a href="https://www.notion.so/3-gedokun-990f591210494fddb0b24820be9a7759?pvs=21">
                3：gedokun
              </a>
            </p>
            <p>
              <a href="https://www.notion.so/3-nigeruno-3c5478ba9b424859b370102e69fe8b24?pvs=21">
                3：nigeruno
              </a>
            </p>

            <h3>2：イベント事業</h3>
            <p>アートによって支援らしくない入り口をつくります。</p>
            <p>
              <a href="https://www.notion.so/3-de296cc7f63c4d09920c3ed70af74f3d?pvs=21">
                3：家庭環境データ
              </a>
            </p>
            <p>
              <a href="https://www.notion.so/3-86d73005b87543528d4ed96dc62b7f34?pvs=21">
                3：裏母の日
              </a>
            </p>
            <p>
              <a href="https://www.notion.so/3-6004e652d72f447fb683a3a18edfb1cd?pvs=21">
                3：音楽ライブ
              </a>
            </p>
          </div>

          <div className="article-container">
            <h1 className="headline">コンセプト</h1>

            <h2>「第3の家族」という存在をつくる</h2>
            <p>
              最終的には第1か第2の家族に帰着してもらうために、そこに辿り着きやすいような環境を遠くから構築します。
            </p>
            <p>
              第3の家族は居場所ではありません。なるべく早く第3の家族を卒業して、大人になったら忘れて欲しいです。
            </p>
          </div>

          <div className="article-container">
            <h1 className="headline">少年少女のその後</h1>
            <p>
              ゴールは人それぞれです。見つける居場所は人でもモノでも自分自身でも。
            </p>
            <ul>
              <li>
                受験合格しました。今は親とも落ち着いて話せるようになりました。
              </li>
              <li>
                彼氏と結婚しました。親との仲裁にも入ってくれて助かりました。
              </li>
              <li>
                実家にいるけど、親との関係をうまくつくれるようになりました。
              </li>
              <li>身の危険を感じたので公的な支援にお世話になりました。</li>
            </ul>
          </div>

          <div className="article-container">
            <h1 className="headline">組織体制</h1>

            <h2>代表 奥村春香</h2>
            <p>
              活動のきっかけは、大学3年生の時に家庭環境問題が原因で弟を自死で亡くしたことです。私の受験失敗を機に家庭が壊れ、親子喧嘩が絶えない中での出来事でした。1年間は何もできなかったのですが、もとからものづくりが好きだったので、家庭環境に悩む人のための掲示板を試しに作ってみたところ、想像以上に人が集まりました。「つくってくれてありがとう」という嬉しい言葉をもらう一方、集まる悩みの重大さを実感し「もっとやらなければ」と思い、新卒で入社したLINE株式会社を退職し、NPO法人第3の家族を立ち上げました。今は、自身の過去のために活動をやっているという気持ちはなく、はざまの少年少女たちと一緒に揺られながら、より良い状態をつくって行くことに没頭しています。
            </p>
            <p>
              <a href="https://www.notion.so/a9d939d6d27e4ff4bc9e849fc92c6e08?pvs=21">
                詳細プロフィール
              </a>
            </p>

            <h2>デザインチーム</h2>
            <p>
              グラフィック・サイトのデザイン（UI）・イベントのディレクションなどを行います。
            </p>

            <h2>開発チーム</h2>
            <p>サイトの開発・データ分析を行います。論文発表も行います。</p>

            <h2>元当事者チーム</h2>
            <p>
              自分たちの経験から、今悩む少年少女たちに何ができるかを考えます。
            </p>

            <h2>事務局</h2>
            <p>第3の家族のバックオフィスを担当します。</p>
          </div>

          <div className="article-container">
            <h1 className="headline">団体概要</h1>
            <Table />
          </div>

          <div className="article-container">
            <h1 className="headline">受賞・採択</h1>
            <ul>
              <li>
                <a href="https://newhope.g-mark.org/award2022.html">
                  GOOD DESIGN NEW HOPE AWARD 2022 最優秀賞
                </a>
              </li>
              <li>
                <a href="https://forbesjapan.com/feat/30under30/2023/honorees/">
                  Forbes JAPAN 30 UNDER 30 2023「世界を変える30歳未満」
                </a>
              </li>
              <li>
                <a href="https://100banch.com/projects/daisan-no-kazoku">
                  100BANCH 74期
                </a>
              </li>
            </ul>
          </div>

          <div className="article-container">
            <h1 className="headline">ネットワーク</h1>
            <ul>
              <li>
                <a href="https://www.shinkoren.or.jp/">新公益連盟</a> 加盟団体
              </li>
              <li>
                <a href="https://icf.mri.co.jp/">未来共創イニシアティブ</a>{" "}
                一般会員
              </li>
            </ul>
          </div>

          <div className="article-container">
            <h1 className="headline">助成金情報</h1>
            <ul>
              <li>2023年度 花王社会起業塾</li>
              <li>2023年度 SVP東京 投資・協働先</li>
              <li>
                赤い羽根
                ポスト・コロナ（新型感染症）社会に向けた福祉活動応援キャンペーン(第8回)
              </li>
            </ul>
            <p>
              <a href="https://www.notion.so/5deec649874d4b028d01fc49c81628da?pvs=21">
                助成金情報詳細
              </a>
            </p>
          </div>

          <div className="article-container">
            <h1 className="headline">メディア・登壇・出展</h1>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <ArticleCard
                headline="2023.08 Forbes
                  JAPAN「自分の居場所はほかにもある。家庭環境に悩む若者を支える」"
                url="https://forbesjapan.com/articles/detail/65699"
                image="/img/article-thumbnail/forbesJP.webp"
              />
              <ArticleCard
                headline="2023.12 NHK NEWS
                  おはよう日本「”家にいると苦しい”から脱出するための「あなたを助ける手札」」"
                url="https://www.nhk.jp/p/ohayou/ts/QLP4RZ8ZY3/blog/bl/pzvl7wDPqn/bp/pkZZqxOXmk/"
                image="/img/article-thumbnail/nhk.png"
              />
              <ArticleCard
                headline='2024.02 Yahoo! JAPAN
                  SDGs「4人に1人の若者が「家に居場所がない」。"寄り添わない"支援で生き抜くための手札を
                  #豊かな未来を創る人」'
                url="https://sdgs.yahoo.co.jp/originals/198.html"
                image="/img/article-thumbnail/yahoo.jpeg"
              />
              <ArticleCard
                headline="メディア・登壇・出展一覧"
                url="https://www.notion.so/bad373b1695743c08ca221c3103e2ae6?pvs=21"
                image="/ogp.png"
              />
            </div>
          </div>

          <div className="article-container">
            <h1 className="headline">定款・諸規程</h1>
            <ul>
              <li>定款.pdf</li>
              <li>サービス利用規約.pdf</li>
              <li>プライバシーポリシー.pdf</li>
            </ul>
          </div>

          <div className="article-container">
            <h1 className="headline">収支報告</h1>
            <ul>
              <li>2023年度（第1期）活動計算書等.pdf</li>
              <li>2023年度（第1期）事業報告書.pdf</li>
              <li>2024年度（第2期）活動計算書等.pdf</li>
              <li>2024年度（第2期）事業報告書.pdf</li>
            </ul>
          </div>

          <div className="article-container">
            <h1 className="headline">問い合わせ</h1>
            <p>
              <a href="https://www.notion.so/defa00b5a53f450cb3a588caae5fdbc5?pvs=21">
                お問い合わせ
              </a>
            </p>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .jumbotron {
          margin-bottom: 200px;

          h1 {
            font-size: 1rem;
            font-weight: normal;
            color: #aaa;
          }

          h2 {
            font-weight: 300;
            font-size: 5rem;
            margin-bottom: 30px;
          }

          p {
            width: 70%;
          }
        }

        .article-container {
          margin-bottom: 100px;
          .headline {
            border-bottom: 1px solid #ccc;
            margin-bottom: 30px;
            font-weight: normal;
          }
        }
      `}</style>
    </>
  );
};

export default About;
