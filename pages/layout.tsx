// app/posts/layout.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  const router = useRouter();
  const [headerStyle, setHeaderStyle] = useState({
    opacity: 1,
    filter: "blur(0px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 600) {
        const currentScrollY = window.scrollY;
        setHeaderStyle({
          opacity: currentScrollY > lastScrollY ? 0 : 1,
          filter: currentScrollY > lastScrollY ? "blur(30px)" : "blur(0px)",
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
          <li className={classes.list}>応援</li>
          <li className={classes.list}>
            <Link
              href="/report"
              className={`${classes.link} ${
                router.pathname === "/report" ? classes.active : ""
              }`}
            >
              レポート
            </Link>
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
              href="/contact"
              className={`${classes.link} ${
                router.pathname === "/contact" ? classes.active : ""
              }`}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
        <div className={classes.navBottom}>
          <Link href="#" className={classes.link}>
            <div className={classes.navButton}>寄付する</div>
          </Link>
          <Link href="#" className={classes.link}>
            <div className={classes.navButton}>少年少女はこちら</div>
          </Link>
        </div>
      </nav>
      <div className={classes.childrenWrapper}>
        <div className={classes.main}>{children}</div>
      </div>

      <footer></footer>
      <style jsx>{``}</style>
    </>
  );
}
