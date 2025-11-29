import Layout from "../layout";
import Image from "next/image";

const Data = () => {
  return (
    <>
      <Layout pageTitle="データ" headline="データ">
        <div className="container">
          <div className="article-container">
            <h2 className="headline">アクティブユーザー数</h2>
            <p>のべユーザー12万人、月間アクティブユーザー7,000人。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "3222/1870",
            }}
            >
              <Image
                src="/img/data-img/data1.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="アクティブユーザー数"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">投稿数の遷移</h2>
            <p>年々増加傾向。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "3497/1329",
            }}
            >
              <Image
                src="/img/data-img/data2.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="投稿数"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">1人じゃないと思えた</h2>
            <p>任意のアンケート結果（N=486）</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "1650/1008",
            }}
            >
              <Image
                src="/img/data-img/data3.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="円グラフ"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">もう少し生きてみようと思えた</h2>
            <p>意のアンケート結果（N=486）</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "3222/1870",
            }}
            >
              <Image
                src="/img/data-img/data4.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="円グラフ"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">ユーザー分布</h2>
            <p>特に多い地域をマッピング。全国から利用。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "786/800",
            }}
            >
              <Image
                src="/img/data-img/data5.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="ユーザー分布"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">時間帯別利用者数</h2>
            <p>夜の利用が多い。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "2255/1512",
            }}
            >
              <Image
                src="/img/data-img/data6.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="時間帯別利用者数"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">利用者属性</h2>
            <p>任意アンケート。中学生中心に小学生〜大学生。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "2232/1407",
            }}
            >
              <Image
                src="/img/data-img/data7.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="アクティブユーザー数"
              />
            </div>
          </div>
          <div className="article-container">
            <h2 className="headline">男女比</h2>
            <p>他のサービスよりも男性が多いことが特徴。</p>
            <div className="image-wrapper"
              style={{
              aspectRatio: "2232/1407",
            }}
            >
              <Image
                src="/img/data-img/data8.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="アクティブユーザー数"
              />
            </div>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .container {
          display: flex;
          gap: 5rem 0;
          flex-direction: row;
          flex-wrap: wrap;
          background-color: white;
        }

        .article-container {
          width: 50%;
          box-sizing: border-box;
          padding: 0px 2rem;
          .headline {
            border-bottom: 1px solid #ccc;
            margin-bottom: 1.5rem;
            font-weight: normal;
          }
          h2 {
            line-height: 2.5;
            font-weight: normal;
            margin-bottom: 1.2rem;
            font-size: 1.5rem;
          }

          h3 {
            font-weight: normal;
            margin-bottom: 1rem;
          }

          section {
            margin-bottom: 5rem;
          }
        }
        .image-wrapper {
          position: relative;
          display: block;
          width: 100%;
          margin-top: 2rem;
          img{
            object-fit: contain;
          }
        }

        @media screen and (max-width: 800px) {
          .container {
          flex-direction: column;
          gap: 4rem 0;
        }
          .article-container {
            padding: 0px;
            width: 100%;
              .headline{
                margin-bottom: 1rem;
              }
              h2 {
              font-size: 1.2rem;
            }
            .image-wrapper{
              margin-top: 1rem;
            }
            p{
              font-size: 0.9rem;
              line-height: 1.4rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Data;
