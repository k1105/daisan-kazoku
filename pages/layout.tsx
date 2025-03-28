// app/posts/layout.tsx
"use client";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import {useRouter} from "next/router";
import Head from "next/head";
import {CSSProperties, useEffect, useState} from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import {Logo} from "@/components/Logo";

const useParentPageInfo = (path: string) => {
  const segments = path.split("/").filter((segment) => segment);

  if (segments.length === 0) {
    return null; // ルートパスの場合は親が存在しない
  }

  // 親のパスを生成
  const parentPath = "/" + segments.slice(0, -1).join("/");

  // 親のタイトルを取得するためのロジックを実装（仮の実装例）
  const parentTitle = getTitleFromPath(parentPath); // ここは自分で実装する必要があります

  return {parentTitle, parentPath};
};

const getTitleFromPath = (path: string): string => {
  // ここにパスからタイトルを取得するロジックを実装
  // 例えば、静的に定義するか、ルックアップテーブルを使用するなど
  const titleMap: {[key: string]: string} = {
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
        <title>
          {typeof pageTitle === "string" ? pageTitle : "Unknown Title"} |
          NPO法人 第３の家族
        </title>
        <meta
          property="og:title"
          content={`${pageTitle} | NPO法人 第３の家族`}
        />
        <meta
          property="og:description"
          content="家庭環境問題のはざまの少年少女が自分の居場所を見つけられるように。どんな家族も生きやすい社会を構築する。"
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

      <div className={styles.header}>
        <div className={styles.headerLeft} style={headerStyle}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          {parentPageInfo && (
            <div className={styles.navigation}>
              <p>
                <Link href={parentPageInfo!.parentPath}>
                  {parentPageInfo?.parentTitle}
                </Link>
                / {pageTitle}
              </p>
            </div>
          )}
        </div>
        <div className={styles.headerRight}>
          <Link href={"/donation"}>
            <p className={styles.headerLink}>寄付する</p>
          </Link>
          <Link href={"https://daisan-kazoku.net/gedokun"}>
            <p className={styles.headerLink}>少年少女はこちら</p>
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
            <div className={styles.pageTopSpacer} />
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
    </>
  );
}
