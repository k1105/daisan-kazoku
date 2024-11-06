// app/posts/layout.tsx
"use client";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { CSSProperties, useEffect, useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { Logo } from "@/components/Logo";

const useParentPageInfo = (path: string) => {
  const segments = path.split("/").filter((segment) => segment);

  if (segments.length === 0) {
    return null; // ルートパスの場合は親が存在しない
  }

  // 親のパスを生成
  const parentPath = "/" + segments.slice(0, -1).join("/");

  // 親のタイトルを取得するためのロジックを実装（仮の実装例）
  const parentTitle = getTitleFromPath(parentPath); // ここは自分で実装する必要があります

  return { parentTitle, parentPath };
};

const getTitleFromPath = (path: string): string => {
  // ここにパスからタイトルを取得するロジックを実装
  // 例えば、静的に定義するか、ルックアップテーブルを使用するなど
  const titleMap: { [key: string]: string } = {
    "/": "トップ",
    "/about": "第３の家族とは",
    "/announcement": "お知らせ",
    "/people": "メンバー",
    "/media": "メディア",
    "/service": "事業内容",
  };

  return titleMap[path] || "Unknown Title";
};

export default function Layout({
  children,
  pageTitle,
  headline,
}: {
  children: React.ReactNode;
  pageTitle: string;
  headline?: string;
}) {
  const router = useRouter();
  const path = router.pathname;
  const parentPageInfo = useParentPageInfo(path);

  const [headerStyle, setHeaderStyle] = useState<CSSProperties>({
    opacity: 1,
    filter: "blur(0px)",
    pointerEvents: "auto",
  });

  const [footerStyle, setFooterStyle] = useState<CSSProperties>({
    transform: "translateY(0)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderStyle({
        opacity: currentScrollY > lastScrollY ? 0 : 1,
        filter: currentScrollY > lastScrollY ? "blur(30px)" : "blur(0px)",
        pointerEvents: currentScrollY > lastScrollY ? "none" : "auto",
      });

      setFooterStyle({
        transform:
          currentScrollY > lastScrollY ? "translateY(3rem)" : "translateY(0)",
      });
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{pageTitle} | NPO法人 第３の家族</title>
        <meta
          property="og:title"
          content={`${pageTitle} | NPO法人 第３の家族`}
        />
        <meta
          property="og:description"
          content="一人でも解決に近づけるような実用的サービス。 家庭環境問題のはざまで悩む少年少女に。 "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daisan-kazoku.vercel.app" />
        <meta
          property="og:image"
          content="https://daisan-kazoku.vercel.app/ogp.png"
        />
        <meta property="og:site_name" content="NPO法人 第３の家族" />
        <meta property="og:locale" content="ja_JP" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@daisan_kazoku" />
      </Head>

      <div className="header">
        <div className="header-left" style={headerStyle}>
          <Logo />
        </div>
        <div className="header-right">
          <Link href={"/donation"}>
            <p className="header-link">寄付する</p>
          </Link>
          <Link href={"https://daisan-kazoku.net/gedokun"}>
            <p className="header-link">少年少女はこちら</p>
          </Link>
          <HamburgerMenu />
        </div>
      </div>
      <div className={styles.childrenWrapper}>
        <div className={styles.main}>
          {headline ? (
            <div className={styles.headlineContainer}>
              <h1 className={styles.headline}>{headline}</h1>
            </div>
          ) : (
            <div style={{ marginTop: "20rem" }}></div>
          )}

          {children}
        </div>
      </div>

      <footer>
        {parentPageInfo && (
          <div className={styles.topicPath} style={footerStyle}>
            <p>
              <Link href={parentPageInfo!.parentPath}>
                {parentPageInfo?.parentTitle}
              </Link>
              &gt; {pageTitle}
            </p>
          </div>
        )}
      </footer>
      <style jsx>{`
        .header {
          display: flex;
          width: 94vw;
          z-index: 120;
          position: fixed;
          top: 30px;
          right: 3vw;
          justify-content: space-between;

          .header-left {
            width: 200px;
            margin-top: 10px;
            transition: all 500ms ease;
          }

          .header-right {
            display: flex;
            gap: 2rem;
            line-height: 40px;
            a {
              text-decoration: none;
              color: black;
            }
          }
        }

        @media screen and (max-width: 600px) {
          .header-link {
            display: none;
          }

          .header {
            .header-left {
              width: 150px;
              z-index: 99;
            }
          }
        }
      `}</style>
    </>
  );
}
