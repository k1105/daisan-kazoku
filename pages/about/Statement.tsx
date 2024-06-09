type Props = {
  state: string;
};

const Statement = ({ state }: Props) => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          height: "3rem",
          lineHeight: "3rem",
          borderRadius: "1.5rem",
          backgroundColor: "white",
          padding: "0 1rem",
          textAlign: "center",
          border: "1px solid #ccc",
          marginBottom: "10px",
          marginRight: "5px",
        }}
      >
        <span>{state}</span>
      </div>
    </>
  );
};

export default Statement;
