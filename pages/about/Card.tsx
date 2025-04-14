import React from "react";
import Image from "next/image";

type Props = {
  headline: string;
  examples: string[];
  image: string;
};

const Card = ({headline, examples, image}: Props) => {
  return (
    <>
      <div className="container">
        <div className="description">
          <h1
            style={{
              fontWeight: "normal",
              fontSize: "1.2rem",
              marginBottom: "0.8rem",
            }}
          >
            {headline}
          </h1>
          {examples &&
            examples.map((example, index) => <p key={index}>{example}</p>)}
        </div>
        <div className="image-wrapper">
          <Image
            src={image}
            alt="image"
            fill
            priority
            style={{
              objectFit: "contain", // or cover
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 30rem;
          max-width: 90vw;
          margin-right: 30px;
          margin-bottom: 30px;
          padding: 15px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .container:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .description {
          flex: 1;
          padding-right: 15px;
        }

        .description h1 {
          color: #333;
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
        }

        .description p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
        }

        .image-wrapper {
          position: relative;
          margin: 0 auto;
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
        }

        @media screen and (max-width: 600px) {
          .container {
            flex-direction: column;
            height: auto;
            padding: 15px;
          }

          .description {
            padding-right: 0;
            margin-bottom: 20px;
          }

          .image-wrapper {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
