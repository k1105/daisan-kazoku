type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => {
  return (
    <>
      <span
        style={{
          display: "inline-block",
          height: "1.6rem",
          fontSize: "0.8rem",
          width: "5rem",
          marginBottom: "1rem",
          border: "1px solid #eee",
          borderRadius: "0.8rem",
          lineHeight: "1.6rem",
          textAlign: "center",
        }}
      >
        {text}
      </span>
    </>
  );
};
