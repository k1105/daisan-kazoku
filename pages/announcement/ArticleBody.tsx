import Image from "next/image";
import styles from "@/styles/Announcement.module.scss";

const ArticleBody = ({
  imageWidth,
  imageHeight,
  imageUrl,
  content,
}: {
  imageWidth: number | null;
  imageHeight: number | null;
  imageUrl: string | null;
  content: string;
}) => {
  return (
    <div>
      {imageUrl && (
        <div
          style={{
            height: "300px",
            aspectRatio:
              imageWidth && imageHeight ? imageWidth / imageHeight : undefined,
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
        dangerouslySetInnerHTML={{__html: content ?? ""}}
      />
    </div>
  );
};

export default ArticleBody;
