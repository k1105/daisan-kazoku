import styles from "@/styles/Home.module.css";
// import { Announcement } from "@/components/Announcement";
import Image from "next/image";
import Link from "next/link";

// Homeコンポーネント。props経由でデータを受け取る
const Home = () => {
  return (
    <main className={styles.main}>
      <div className="logo">
        <Image
          src="/logo.svg"
          fill
          priority
          style={{
            objectFit: "contain",
          }}
          alt="第３の家族"
        />
      </div>
      <div className="link">
        <Link
          href="/announcement"
          style={{
            textDecoration: "none",
            color: "black",
            borderLeft: "1px solid #ccc",
            marginBottom: "1rem",
            paddingLeft: "1rem",
          }}
        >
          活動報告
        </Link>
        <Link
          href="#"
          style={{
            textDecoration: "none",
            color: "black",
            borderLeft: "1px solid #ccc",
            marginBottom: "1rem",
            paddingLeft: "1rem",
          }}
        >
          クリエイティブ事業
        </Link>
        <Link
          href="#"
          style={{
            textDecoration: "none",
            color: "black",
            borderLeft: "1px solid #ccc",
            marginBottom: "1rem",
            paddingLeft: "1rem",
          }}
        >
          効果
        </Link>
      </div>

      <style jsx>
        {`
          .logo {
            width: 50%;
            height: 200px;
            margin-bottom: 2rem;
            position: relative;
          }
          .link {
            text-decoration: none;
            color: black;
            font-weight: 100;
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
          }

          @media screen and (max-width: 600px) {
            .logo {
              margin-top: 20vh;
              width: 70%;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Home;
