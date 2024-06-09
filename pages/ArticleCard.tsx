import React from "react";
import Image from "next/image";

type Props = {
  headline: string;
  image: string;
  url: string;
};

const ArticleCard = ({ headline, image, url }: Props) => {
  return (
    <>
      <a href={url} className="container">
        <div>
          <div
            style={{
              width: "100%",
              height: "250px",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <Image
              src={image}
              fill
              priority
              style={{
                objectFit: "cover",
              }}
              alt="thumbnail"
            />
          </div>

          <p>{headline}</p>
        </div>
      </a>
      <style jsx>{`
        .container {
          border-radius: 10px;
          display: block;
          width: 400px;
          margin-bottom: 20px;
          height: 400px;
          background-color: white;
        }

        .thumbnail-wrapper {
        }

        p {
          margin: 10px;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </>
  );
};

export default ArticleCard;
