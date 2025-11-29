import React from "react";
import Image from "next/image";

type Props = {
  headline: string;
  image: string | null;
  url: string | null;
  date: string | null;
};

const ArticleCard = ({headline, image, url, date}: Props) => {
  return (
    <>
      <a href={url ? url : "#"} className="container"  target="_blank" rel="noopener">
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              marginBottom: "0.4rem",
              position: "relative",
            }}
          >
            <Image
              src={image ? image : "/ogp.png"}
              fill
              priority
              style={{
                objectFit: "cover",
              }}
              alt="thumbnail"
            />
          </div>
          <div className="article-date">
            <p className="date">{date}</p>
            <p className="headline">{headline}</p>
          </div>
        </div>
      </a>
      <style jsx>{`
        .container {
          border-radius: 10px;
          display: block;
          width: 100%;
          margin-bottom: 20px;
        }

        .headline {
          font-size: 0.9rem;
        }

        p {
          margin-top: 2px;
          line-height: 1.8;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .date {
          font-size: 0.8rem;
          color: #ccc;
          text-align: right;
        }
        .article-date{
          width: 100%;
          min-width: 100%;
          p{
            width: 100%;
            min-width: 100%;
          }
        }
@media screen and (min-width: 600px) and (max-width: 1200px) {
        .container {
          max-width: 70vw;
        }
}
      `}</style>
    </>
  );
};

export default ArticleCard;
