import React from "react";

type Props = {
  headline: string;
  examples: string[];
};

const Card = ({ headline, examples }: Props) => {
  return (
    <>
      <div
        style={{
          width: "calc(50% - 10px)",
          height: "200px",
          marginBottom: "20px",
          padding: "10px",
          paddingBottom: "30px",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            fontWeight: "300",
            fontSize: "1.2rem",
            marginBottom: "0.8rem",
          }}
        >
          {headline}
        </h1>
        {(() => {
          const elem = [];
          for (const example of examples) {
            elem.push(<p>{example}</p>);
          }
          return elem;
        })()}
      </div>
    </>
  );
};

export default Card;
