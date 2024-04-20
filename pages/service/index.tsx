import Image from "next/image";
import Layout from "../layout";

const Service = () => {
  return (
    <>
      <Layout>
        <div className="main">
          <div className="service">
            <h1>nigeruno</h1>
            <h2>つらい現状をハックするための情報サイト</h2>
            <p>
              多様な支援や体験談を見て、使える手札（手段）を探す。すぐには根本的な解決ができなくても、将来に希望を見出す。
            </p>
            <a href="https://nigeruno.gedokun.com/">nigerunoへ</a>
            <div className="content-wrapper">
              <div className="content">
                <p className="copy">既存との差</p>
                <h3>経験者の声を掲載、公的な支援以外の情報も載せる</h3>
                <div className="spacer" />
                <p>
                  窓口のリンク集はたくさんあります。しかし、リンクを知るだけでは行動に移せない人も多くいます。メリット・デメリット・経験者の声などの「文脈」の情報も載せています。また、公的な手段じゃないけど経験者だからこそわかる役に立つ手段も掲載しています。
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/nigeruno_map.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="content">
                <p className="copy">ユーザーからの声</p>
                <h3>こんなにできることあるんだ</h3>
                <div className="spacer" />
                <p>
                  「応援してくれている人がいるんだなって嬉しくなりました。今は一人暮らしを始められました」「よく聞く手段でも実はうまくいかないみたいなことがほんと多々あるので、こういう経験談があるのはすごく大事」「昔自分が困ってた時に欲しかったなぁ」
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/nigeruno_mv.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service">
            <h1>gedokun</h1>
            <h2>悩みを吐き出す、お互いに励まし合う</h2>
            <p>
              家庭環境の悩みが集まる掲示板。同じような境遇の人とゆるやかに繋がる。
            </p>
            <a href="https://gedokun.com/">gedokunへ</a>
            <div className="content-wrapper">
              <div className="content">
                <p className="copy">既存との差</p>
                <h3>直接はつながらない、閉じた場が必要</h3>
                <div className="spacer" />
                <p>
                  SNSで呟くと大人からお説教されたり、近すぎるからこその衝突が起こったりします。無料相談は増えましたが、話すのが難しい子もいます。1人で抱えこまずに悩みを吐き出し、遠くに仲間の存在を感じることで、次の一歩を踏みだす気力ができます。
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/gedokun_map.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="content">
                <p className="copy">ユーザーからの声</p>
                <h3>ここなら悩みを吐き出せる</h3>
                <div className="spacer" />
                <p>
                  「エールをもらって、自分を応援してくれる人がいるんだと思うと涙が出た」「ここにいる人はみんな仲間だと思ってる。」「このサイト来て良かった、、、！ほんとに救われた。居場所が増えました。」「ここのサイトは批判がなくて本当にありがたい」
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/gedokun_mv.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="service">
            <h1>家庭環境データ</h1>
            <h2>仲間の存在を遠くに感じる、リアルを社会に発信する</h2>
            <p>
              調査内容をちょっと考えさせられるようなグラフィックにすることで、当事者が、傷ついていることに気づく。社会が、立ち止まって考えてみる。
            </p>
            <a href="https://daisan-kazoku.com/">家庭環境データへ</a>
            <div className="content-wrapper">
              <div className="content">
                <p className="copy">既存との差</p>
                <h3>視覚比喩を用いて、より当事者のためのものに</h3>
                <div className="spacer" />
                <p>
                  白書はたくさんあって、関係者はそれを読むでしょうし、それで十分にわかるでしょう。しかし、そもそも当事者は、傷ついていることに気づいていない人が多く、悩んでいる人は若者です。そこで、調査の結果視覚比喩で表現し、立ち止まって考えるきっかけをつくることを目指します。
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/katei-data_map.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="content">
                <p className="copy">ユーザーからの声</p>
                <h3>私だけじゃなかったんだ</h3>
                <div className="spacer" />
                <p>
                  「死にたくなるのが当たり前なのはまずいけど、同じような人がいてちょっと安心した」「結婚が億劫になる気持ちわかる」
                </p>
                <div className="spacer" />
                <div>
                  <Image
                    src="/img/katei-data_mv.png"
                    alt="hoge"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .main {
            width: 40vw;
            margin: 3rem auto;
          }
          .service {
            margin-bottom: 10rem;
          }
          .service a {
            display: inline-block;
            text-decoration: none;
            margin-bottom: 1rem;
            color: #92d7ca;
            transition: all ease 0.3s;
          }
          .service a:hover {
            filter: blur(1px);
          }

          .service h1 {
            font-weight: 100;
            margin-bottom: 2rem;
          }

          .service h2 {
            font-weight: 100;
            margin-bottom: 1rem;
          }

          .service h3 {
            font-size: 1.2rem;
            font-weight: 100;
            line-height: 1.5rem;
            margin-bottom: 1rem;
          }

          .service p {
            margin-bottom: 1rem;
          }

          .content-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .content {
            display: flex;
            flex-direction: column;
            width: 48%;
          }

          .spacer {
            flex-grow: 1;
          }

          .copy {
            color: #aaa;
            margin-bottom: 0.6rem;
          }

          @media screen and (max-width: 600px) {
            .main {
              width: 90vw;
            }

            .content {
              width: 100%;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Service;
