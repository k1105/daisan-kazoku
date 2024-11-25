import Image from "next/image";
import styles from "@/styles/Announcement.module.scss";

const ArticleBody = ({
  imageUrl,
  content,
}: {
  imageUrl: string | null;
  content: string;
}) => {
  return (
    <div>
      {imageUrl && (
        <div
          style={{
            width: "100%",
            height: "300px",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          <Image
            src={imageUrl}
            fill
            priority
            style={{
              objectFit: "contain",
            }}
            alt="ogp-image"
          />
        </div>
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content ?? "" }}
      />
    </div>
  );
};

export default ArticleBody;
