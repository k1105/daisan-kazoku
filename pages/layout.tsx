// app/posts/layout.tsx
"use client";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import {usePathname} from "next/navigation";
import Head from "next/head";
import {CSSProperties, useEffect, useState} from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import {Logo} from "@/components/Logo";

const getTitleFromPath = (path: string): string => {
  // 基本のタイトルマッピング
  const titleMap: {[key: string]: string} = {
    "/": "トップ",
    "/about": "第３の家族とは",
    "/announcement": "お知らせ",
    "/people": "メンバー",
    "/media": "メディア",
    "/service": "事業内容",
    "/data": "データ",
    "/donation": "寄付する",
    "/contact": "お問い合わせ",
  };

  // マッピングに存在する場合はそのタイトルを返す
  if (titleMap[path]) {
    return titleMap[path];
  }

  // パスをセグメントに分割
  const segments = path.split("/").filter(Boolean);

  // 最後のセグメントを取得
  const lastSegment = segments[segments.length - 1];

  // 最後のセグメントをタイトルとして使用
  // ハイフンをスペースに変換し、各単語の先頭を大文字に
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const useParentPageInfo = (path: string | null) => {
  if (!path) {
    return null;
  }

  const segments = path.split("/").filter((segment) => segment);

  if (segments.length === 0) {
    return null; // ルートパスの場合は親が存在しない
  }

  // ルートパスに到達するまで再帰的に親パスを取得
  const breadcrumbs = [];
  let currentPath = "";

  // ルートパスを追加
  breadcrumbs.push({
    title: getTitleFromPath("/"),
    path: "/",
  });

  // 各セグメントのパスを追加（最後のセグメントは除く）
  for (let i = 0; i < segments.length - 1; i++) {
    currentPath += "/" + segments[i];
    breadcrumbs.push({
      title: getTitleFromPath(currentPath),
      path: currentPath,
    });
  }

  return breadcrumbs;
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
  const path = usePathname();
  const parentPageInfo = useParentPageInfo(path || "");

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
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.5; // 50vh

      // スクロール位置が50vh未満の場合は常に表示
      if (currentScrollY < threshold) {
        setHeaderStyle({
          opacity: 1,
          filter: "blur(0px)",
          pointerEvents: "auto",
        });
        setFooterStyle({
          transform: "translateY(0)",
        });
      } else {
        // 50vh以上の場合のみ、スクロール方向に応じて表示/非表示を切り替え
        setHeaderStyle({
          opacity: currentScrollY > lastScrollY ? 0 : 1,
          filter: currentScrollY > lastScrollY ? "blur(20px)" : "blur(0px)",
          pointerEvents: currentScrollY > lastScrollY ? "none" : "auto",
        });
        setFooterStyle({
          transform:
            currentScrollY > lastScrollY ? "translateY(3rem)" : "translateY(0)",
        });
      }
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
              <Logo style={{fill: "black"}} />
            </Link>
          </div>
          {parentPageInfo && (
            <div className={styles.navigation}>
              <p>
                {parentPageInfo.map((crumb, index) => (
                  <span key={crumb.path}>
                    <Link href={crumb.path}>{crumb.title}</Link>
                    {index < parentPageInfo.length - 1 ? " / " : " / "}
                  </span>
                ))}
                {pageTitle}
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
              {parentPageInfo.map((crumb, index) => (
                <span key={crumb.path}>
                  <Link href={crumb.path}>{crumb.title}</Link>
                  {index < parentPageInfo.length - 1 ? " > " : " > "}
                </span>
              ))}
              {pageTitle}
            </p>
          </div>
        )}
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
              <a
                href="https://drive.google.com/file/d/1l7ols46aMudmrzikGKUFP3qcmhx3JJz5/view"
                className={styles.footerLink}
                target="_blank"
                rel="noopener"
              >
                定款
              </a>
              <Link href="/privacy-policy" className={styles.footerLink}>
                プライバシーポリシー
              </Link>
              <Link href="/term-of-service" className={styles.footerLink}>
                利用規約
              </Link>
            </div>
            <div className={styles.footerOrganization}>NPO法人 第３の家族</div>
          </div>
        </div>
      </footer>
    </>
  );
}
