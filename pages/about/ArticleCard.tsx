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
      <a href={url ? url : "#"} className="container">
        <div>
          <div
            style={{
              width: "100%",
              height: "220px",
              marginBottom: "1rem",
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
          <p className="date">{date}</p>
          <p className="headline">{headline}</p>
        </div>
      </a>
      <style jsx>{`
        .container {
          border-radius: 10px;
          display: block;
          width: 300px;
          margin-bottom: 20px;
        }

        .headline {
          font-size: 0.9rem;
        }

        p {
          margin: 10px;
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
      `}</style>
    </>
  );
};

export default ArticleCard;
