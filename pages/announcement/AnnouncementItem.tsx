import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Props = {
  elem: News | undefined;
};

const AnnouncementItem = ({ elem }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
        className={`content-wrapper ${isOpen ? "open-effect" : "hover-effect"}`}
      >
        <div
          className={`content-header-box ${
            isOpen ? "open-effect" : "hover-effect"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="content-header">{elem.title ?? "no title"}</p>
          <div className="property">
            <Tag text={elem.category?.name ?? "カテゴリなし"} />
            <p
              style={{
                fontSize: "0.8rem",
                color: "gray",
                lineHeight: "1.6rem",
              }}
            >
              {elem.releaseDate?.split("T")[0] ?? "日付不明"}
            </p>
          </div>
        </div>

        <div
          ref={contentRef}
          style={{
            height: isOpen ? `${contentHeight}px` : "0px",
            overflow: "hidden",
            transition: "height ease 0.3s",
          }}
        >
          {elem.ogp && (
            <div
              style={{
                width: "100%",
                height: "300px",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <Image
                src={elem.ogp.url}
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
            className="content"
            dangerouslySetInnerHTML={{ __html: elem.content ?? "" }}
          />
          <div className="close-button-wrapper">
            <a className="close-button" onClick={() => setIsOpen(false)}>
              閉じる
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* CSS styles here */
      `}</style>
    </>
  );
};

export default AnnouncementItem;
