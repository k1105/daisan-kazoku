type Props = {
  name: string;
  description: string;
  en: string;
};

const DepartmentCard = ({ en, name, description }: Props) => {
  return (
    <>
      <div className="container">
        <div className="position">
          <p>{en}</p>
        </div>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          gap: 0rem;
          margin-bottom: 5rem;
        }
        .position {
          width: 10rem;
          font-size: 0.8rem;
          line-height: 0.5rem;
        }

        h1 {
          font-weight: normal;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        @media screen and (max-width: 600px) {
          .container {
            flex-direction: column;
            margin-bottom: 3rem;
          }
          .position {
            font-size: 0.6rem;
            color: #9a9a9a;
          }
          h1 {
            font-size: 1.2rem;
          }
          p {
            line-height: 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default DepartmentCard;
