// app/posts/layout.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Layout.module.css";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
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
        <ul>
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
