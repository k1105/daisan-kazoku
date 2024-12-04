export const PieChart = ({ numberList }: { numberList: number[] }) => {
  let sum = 0;
  const gradientColors = ["#aaa", "#ddd", "#cc65fe", "#ffce56"]; // 必要に応じて色を追加

  const gradientSegments = numberList
    .map((number, index) => {
      const start = sum;
      sum += number;
      const end = sum;
      const color = gradientColors[index % gradientColors.length];
      return `${color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <>
      <div className="pie-chart" />
      <style jsx>{`
        .pie-chart {
          width: 200px;
          height: 200px;
          background: conic-gradient(${gradientSegments});
          border-radius: 50%;
        }

        @media screen and (max-width: 600px) {
          .pie-chart {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </>
  );
};
