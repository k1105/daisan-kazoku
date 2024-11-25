export const CopyLink = ({ link }: { link: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert(`クリップボードにコピーしました: "${link}"`);
    } catch (error) {
      console.error("コピーに失敗しました:", error);
      alert("コピーに失敗しました。");
    }
  };
  return (
    <>
      <a onClick={handleCopy}>リンクをコピー</a>
    </>
  );
};
