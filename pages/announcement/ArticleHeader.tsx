import Tag from "./Tag";
import styles from "@/styles/Announcement.module.scss";

export const ArticleHeader = ({
  isOpen,
  title,
  categoryName,
  releaseDate,
}: {
  isOpen: boolean;
  title: string | null;
  categoryName: string | null;
  releaseDate: string | null;
}) => {
  return (
    <div
      className={`${styles.contentHeaderBox} ${
        isOpen ? styles.openEffect : styles.hoverEffect
      }`}
    >
      <p className={styles.contentHeader}>{title ?? "no title"}</p>
      <div className={styles.property}>
        <Tag text={categoryName ?? "カテゴリなし"} />
        <p className={styles.releaseDate}>
          {releaseDate?.split("T")[0] ?? "日付不明"}
        </p>
      </div>
    </div>
  );
};
