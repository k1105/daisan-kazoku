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
        <h1
          style={{
            fontWeight: "normal",
            fontSize: "1.2rem",
            marginBottom: "0.8rem",
          }}
        >
          {headline}
        </h1>
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
        {examples &&
          examples.map((example, index) => <p key={index}>{example}</p>)}
      </div>
      <style jsx>{`
        .container {
          display: block;
          width: 300px;
          height: 400px;
          margin-right: 30px;
          margin-bottom: 30px;
          padding: 10px;
          padding-bottom: 30px;
          border-radius: 5px;
          background-color: white;
          filter: drop-shadow(#eee 5px 5px 3px);
        }

        .image-wrapper {
          position: relative;
          margin: 0 auto;
          width: 250px;
          height: 250px;
        }

        @media screen and (max-width: 600px) {
        }
      `}</style>
    </>
  );
};

export default Card;
