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
        <Link href="/announcement" className={styles.pageLink}>
          活動報告
        </Link>
        <Link href="/service" className={styles.pageLink}>
          サービス
        </Link>
        <Link href="#" className={styles.pageLink}>
          効果
        </Link>
      </div>
      <Link href="#" className={styles.pageLink}>
        pdf
      </Link>

      <style jsx>
        {`
          .logo {
            width: 50%;
            height: 100px;
            margin-bottom: 1rem;
            position: relative;
          }
          .link {
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
