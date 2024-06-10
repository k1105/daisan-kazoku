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
          display: inline-block;
          width: 300px;
          height: 200px;
          margin-bottom: 20px;
          margin-right: 30px;
          padding: 10px;
          padding-bottom: 30px;
          border-radius: 5px;
          background-color: white;
          filter: drop-shadow(#eee 5px 5px 3px);
        }

        @media screen and (max-width: 600px) {
          .container {
          }
        }
      `}</style>
    </>
  );
};

export default Card;
