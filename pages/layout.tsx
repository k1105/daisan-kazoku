// app/posts/layout.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
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
    "/poeple": "メンバー",
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

  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>({
    opacity: 1,
    filter: "blur(0px)",
    pointerEvents: "auto",
  });

  const [footerStyle, setFooterStyle] = useState<React.CSSProperties>({
    transform: "translateY(0)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 600) {
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
      }
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
      <nav className={classes.nav} style={headerStyle}>
        <div className={classes.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul className={classes.navLink}>
          <li className={classes.list}>
            <Link
              href="/about"
              className={`${classes.link} ${
                router.pathname === "/about" ? classes.active : ""
              }`}
            >
              第３の家族とは
            </Link>
          </li>
          <li className={classes.list}>
            <Link
              href="/service"
              className={`${classes.link} ${
                router.pathname === "/service" ? classes.active : ""
              }`}
            >
              事業内容
            </Link>
          </li>
          <li className={classes.list}>
            <Link
              href="/announcement"
              className={`${classes.link} ${
                router.pathname === "/announcement" ? classes.active : ""
              }`}
            >
              お知らせ
            </Link>
          </li>
          <li className={classes.list}>
            {/* <Link
              href="/report"
              className={`${classes.link} ${
                router.pathname === "/report" ? classes.active : ""
              }`}
            >
              レポート
            </Link> */}
          </li>
          <li className={classes.list}>
            <Link
              href="/data"
              className={`${classes.link} ${
                router.pathname === "/data" ? classes.active : ""
              }`}
            >
              データ
            </Link>
          </li>
          <li className={classes.list}>
            <Link
              href="mailto:info@daisan-kazoku.net" //href="/contact"
              className={`${classes.link} ${
                router.pathname === "/contact" ? classes.active : ""
              }`}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
        <div className={classes.navBottom}>
          <Link
            href="https://syncable.biz/associate/daisan-kazoku"
            className={classes.link}
          >
            <div className={classes.navButton}>寄付する</div>
          </Link>
          <Link href="https://daisan-kazoku.net" className={classes.link}>
            <div className={classes.navButton}>少年少女はこちら</div>
          </Link>
        </div>
      </nav>
      <div className={classes.childrenWrapper}>
        <div className={classes.main}>
          {headline && (
            <h1 style={{ fontWeight: "100", marginBottom: "3rem" }}>
              {headline}
            </h1>
          )}
          {children}
        </div>
      </div>

      <footer>
        {parentPageInfo && (
          <div className={classes.topicPath} style={footerStyle}>
            <p>
              <Link href={parentPageInfo!.parentPath}>
                {parentPageInfo?.parentTitle}
              </Link>{" "}
              &gt; {pageTitle}
            </p>
          </div>
        )}
      </footer>
      <style jsx>{``}</style>
    </>
  );
}
