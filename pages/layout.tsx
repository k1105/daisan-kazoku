// app/posts/layout.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  const router = useRouter();
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
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link href="/">
            <Image
              src="/logo.svg"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
              alt="第３の家族"
            />
          </Link>
        </div>
        <ul className={classes.navLink}>
          <li className={classes.list}>第3の家族とは</li>
          <li className={classes.list}>
            <Link
              href="/service"
              className={`${classes.link} ${
                router.pathname === "/service" ? classes.active : ""
              }`}
            >
              サービス
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
          <li className={classes.list}>応援</li>
          <li className={classes.list}>デザインエンジニアリング</li>
          <li className={classes.list}>
            <Link
              href="/contact"
              className={`${classes.link} ${
                router.pathname === "/contact" ? classes.active : ""
              }`}
            >
              お問い合わせ
            </Link>
          </li>
          <li className={classes.list}>少年少女はこちら</li>
        </ul>
      </nav>
      {children}
      <footer></footer>
    </>
  );
}
