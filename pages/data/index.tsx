import Layout from "../layout";
import Image from "next/image";

const Data = () => {
  return (
    <>
      <Layout pageTitle="データ">
        <h1 style={{ fontWeight: "100", marginBottom: "3rem" }}>データ</h1>
        <div className="container">
          <div className="article-container">
            <h1 className="headline">ユーザー数</h1>
            <p>のべユーザー3万人、固定ユーザー5千人</p>
            <div className="image-wrapper">
              <Image
                src="/img/data/user-amount.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="hoge"
              />
            </div>
          </div>
          <div className="article-container">
            <h1 className="headline">利用時間帯</h1>
            <p>夜の利用割合が高い</p>
            <div className="image-wrapper">
              <Image
                src="/img/data/time.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="hoge"
              />
            </div>
          </div>
          <div className="article-container">
            <h1 className="headline">ユーザー分布</h1>
            <p>全国から満遍なく利用されている</p>
            <div className="image-wrapper">
              <Image
                src="/img/data/user-area.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="hoge"
              />
            </div>
          </div>
          <div className="article-container">
            <h1 className="headline">ユーザーの端末</h1>
            <p>学校のPCやタブレットからアクセスする人も</p>
            <div className="image-wrapper">
              <Image
                src="/img/data/user-device.png"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
                alt="hoge"
              />
            </div>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .container {
          border-radius: 10px;
          padding: 30px 10px;
          background-color: white;
        }

        .article-container {
          margin-bottom: 100px;
          .headline {
            border-bottom: 1px solid #ccc;
            margin-bottom: 30px;
            font-weight: normal;
          }

          h2 {
            font-weight: normal;
            margin-bottom: 1.2rem;
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
          margin: 100px 0;
          width: 100%;
          height: 300px;
        }

        @media screen and (max-width: 600px) {
          .image-wrapper {
            margin: 30px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Data;
