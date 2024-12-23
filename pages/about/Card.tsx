import React from "react";
import Image from "next/image";

type Props = {
  headline: string;
  examples: string[];
  image: string;
};

const Card = ({ headline, examples, image }: Props) => {
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
          height: 400px;
          margin-right: 30px;
          margin-bottom: 30px;
          padding: 10px;
          padding-bottom: 30px;
        }

        .image-wrapper {
          position: relative;
          margin: 0 auto;
          width: 250px;
          height: 250px;
        }

        @media screen and (max-width: 600px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
