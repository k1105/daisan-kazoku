// app/posts/layout.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <div className="logo">
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
          <li>第3の家族とは</li>
          <li>
            <Link href="/service">サービス</Link>
          </li>
          <li>
            <Link href="/announcement">お知らせ</Link>
          </li>
          <li>応援</li>
          <li>デザインエンジニアリング</li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li>少年少女はこちら</li>
        </ul>
      </nav>
      {children}
      <footer></footer>
      <style jsx>{`
        nav {
          position: fixed;
          top: 5vh;
          left: 5vw;
        }

        li {
          list-style: none;
          font-weight: 100;
        }

        .logo {
          width: 100%;
          height: 100px;
          margin-bottom: 1rem;
          position: relative;
        }

        @media screen and (max-width: 600px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
