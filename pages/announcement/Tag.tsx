type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  return (
    <>
      <span
        style={{
          display: "inline-block",
          height: "1.4rem",
          fontSize: "0.7rem",
          width: "4.5rem",
          marginBottom: "1rem",
          color: "white",
          borderRadius: "5px",
          lineHeight: "1.4rem",
          textAlign: "center",
          backgroundColor: "#9a9a9a",
        }}
      >
        {text}
      </span>
    </>
  );
};

export default Tag;
