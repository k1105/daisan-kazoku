type Props = {
  name: string;
  description: string;
};

const DepartmentCard = ({ name, description }: Props) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <style jsx>{`
        div {
          width: 49%;
          height: 200px;
          border-radius: 10px;
        }

        h1 {
          font-weight: normal;
          border-bottom: 1px solid #ccc;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media screen and (max-width: 600px) {
          div {
            width: 45%;
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
