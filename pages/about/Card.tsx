import React from "react";

type Props = {
  headline: string;
  examples: string[];
};

const Card = ({ headline, examples }: Props) => {
  return (
    <>
      <div className="container">
        <h1
          style={{
            fontWeight: "300",
            fontSize: "1.2rem",
            marginBottom: "0.8rem",
          }}
        >
          {headline}
        </h1>
        {examples &&
          examples.map((example, index) => <p key={index}>{example}</p>)}
      </div>
      <style jsx>{`
        .container {
          width: calc(50% - 10px);
          height: 200px;
          margin-bottom: 20px;
          padding: 10px;
          padding-bottom: 30px;
          border-radius: 5px;
          background-color: white;
        }

        @media screen and (max-width: 600px) {
          .container {
            width: 100%;
            height: 200px;
            margin-bottom: 20px;
            padding: 10px;
            padding-bottom: 30px;
            border-radius: 5px;
            background-color: white;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
