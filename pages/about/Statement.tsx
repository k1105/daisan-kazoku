type Props = {
  state: string;
};

const Statement = ({ state }: Props) => {
  return (
    <>
      <div className="container">
        <span>{state}</span>
      </div>
      <style jsx>{`
        .container {
          display: inline-block;
          height: 3rem;
          line-height: 3rem;
          border-radius: 1.5rem;
          background-color: white;
          padding: 0 1rem;
          text-align: center;
          border: 1px solid #ccc;
          margin-bottom: 10px;
          margin-right: 5px;
        }

        @media screen and (max-width: 600px) {
          .container {
            font-size: 0.65rem;
            padding: 0 0.75rem;
            line-height: 2.5rem;
            height: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Statement;
