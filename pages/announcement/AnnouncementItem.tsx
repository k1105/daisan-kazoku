import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { CopyLink } from "@/components/CopyLink";
import styles from "@/styles/Announcement.module.scss";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

type Props = {
  elem: News;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

const AnnouncementItem = ({ elem, isOpen, onToggle }: Props) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  if (!elem) {
    return <p>データが存在しません</p>;
  }

  return (
    <>
      <div
        className={`${styles.contentWrapper} ${
          isOpen ? styles.openEffect : styles.hoverEffect
        }`}
      >
        <div onClick={() => onToggle(elem.id)}>
          <ArticleHeader
            isOpen
            title={elem.title}
            categoryName={elem.category.name}
            releaseDate={elem.releaseDate}
          />
        </div>

        <div
          ref={contentRef}
          style={{
            height: isOpen ? `${contentHeight}px` : "0px",
            overflow: "hidden",
            transition: "height ease 0.3s",
          }}
        >
          <ArticleBody
            imageUrl={elem.ogp ? elem.ogp.url : null}
            content={elem.content}
          />
          <div className={styles.optionsWrapper}>
            <CopyLink
              link={`https://daisan-kazoku.com/announcement/${elem.id}`}
            />
            <a onClick={() => onToggle("")}>閉じる</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementItem;
