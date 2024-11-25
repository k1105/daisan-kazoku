import { useState } from "react";
import { InsertLink } from "./icons/InsertLink";
import { Checked } from "./icons/Checked";
import styles from "@/styles/Announcement.module.scss";

export const CopyLink = ({ link }: { link: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error("コピーに失敗しました:", error);
      alert("コピーに失敗しました。");
    }
  };
  return (
    <>
      <a onClick={handleCopy}>
        {!isCopied ? (
          <>
            <InsertLink className={styles.icon} />
            リンクをコピー
          </>
        ) : (
          <>
            <Checked className={styles.icon} />
            コピーしました
          </>
        )}
      </a>
    </>
  );
};
