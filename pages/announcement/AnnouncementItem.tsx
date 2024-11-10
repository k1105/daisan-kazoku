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
        .content-wrapper {
          padding-left: 10px;
          padding-right: 10px;
          border-bottom: 0.5px solid #ccc;
          overflow: hidden;
          transition: all ease 0.3s;
        }

        .content-header {
          font-size: 1.5rem;
          font-weight: 100;
          margin-bottom: 3rem;
          margin-left: 0.5rem;
        }

        .content-header-box {
          cursor: pointer;
          padding-top: 3rem;
          transition: all ease 0.3s;
        }

        @media (pointer: fine) {
          .content-wrapper.hover-effect:hover {
            background-color: white;
          }
          .content-header-box.hover-effect:hover {
            padding-top: 3.5rem;
          }
        }

        .content-wrapper.open-effect {
          background-color: white;
        }

        .content-header-box.open-effect {
          padding-top: 3.5rem;
        }

        .property {
          display: flex;
          gap: 20px;
        }

        .content {
          max-width: 32rem;
          padding: 3rem 0;
          margin: 0 1rem;
          h2 {
            margin-bottom: 1rem;
            line-height: 2rem;
            font-size: 1rem;
            border-bottom: 0.5px solid #ccc;
          }
          p,
          li {
            margin-bottom: 1rem;
            line-height: 2rem;
          }
          a {
            color: #92d7ca;
          }
          img {
            width: 100%;
            height: auto;
          }
        }

        .close-button-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .close-button {
          text-align: right;
          margin-bottom: 1rem;
          color: #ccc;
          cursor: pointer;
        }

        @media screen and (max-width: 600px) {
          .content-header {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementItem;
