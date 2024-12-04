export const FloatingButton = () => {
  return (
    <>
      <a
        className="floating-button"
        href="https://syncable.biz/associate/daisan-kazoku"
      >
        <p>寄付はこちら</p>
        <small>syncableのページへ</small>
      </a>
      <style jsx>{`
        .floating-button {
          display: block;
          cursor: pointer;
          width: 10rem;
          height: 10rem;
          background-color: var(--green);
          border-radius: 50%;
          text-align: center;
          color: white;
          padding: 3.8rem 0;
          filter: drop-shadow(0px 0px 10px var(--gray));
          text-decoration: none;
          color: white;
          p {
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.2rem;
          }
          small {
            color: var(--gray);
            line-height: 1rem;
            font-size: 0.7rem;
          }
        }

        @media screen and (max-width: 600px) {
          .floating-button {
            width: 7rem;
            height: 7rem;
            padding: 2.7rem 0;
            p {
              font-size: 1rem;
              line-height: 1rem;
            }
            small {
              display: block;
              margin-top: 0.3rem;
              font-size: 0.6rem;
              line-height: 0.8rem;
            }
          }
        }
      `}</style>
    </>
  );
};
