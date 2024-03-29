import React from "react";
import { Tag } from "./Tag";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Data = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
  OGP: {
    url: string;
    height: number;
    width: number;
  } | null;
};

type Props = {
  elem: Data;
};

export const AnnouncementItem = ({ elem }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null); // コンテンツの ref
  // `isOpen`の状態に応じて、動的にクラス名を切り替える

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`content-wrapper ${isOpen ? "open-effect" : "hover-effect"}`}
      >
        <div
          className={`content-header-box ${
            isOpen ? "open-effect" : "hover-effect"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="content-header">
            <p>{elem.title}</p>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>2024/03/25</p>
          </div>
          <Tag text="団体活動" />
        </div>

        <div
          ref={contentRef} // このdivのrefを設定
          style={{
            height: isOpen ? `${contentHeight}px` : "0px",
            overflow: "hidden",
            transition: "height ease 0.3s",
          }}
        >
          {elem.OGP && (
            <div
              style={{
                width: "100%",
                height: "300px",
                marginBottom: "2rem",
                position: "relative",
                border: "1px solid #eee",
              }}
            >
              <Image
                src={elem.OGP.url}
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
            dangerouslySetInnerHTML={{ __html: elem.content }}
          />
          <div className="close-button-wrapper">
            <a
              className="close-button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
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

        .content-header-box {
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

        .content-header {
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: space-between;
        }

        .content {
          padding: 3rem 0;
          h2 {
            margin-bottom: 1rem;
            line-height: 2rem;
            font-size: 1rem;
            border-bottom: 0.5px solid #ccc;
          }
          p {
            margin-bottom: 1rem;
          }
          a {
            color: #92d7ca;
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
      `}</style>
    </>
  );
};
