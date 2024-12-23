import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const state = useRef<number>(0);
  const animationContainer = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<boolean>(false);
  const startY = useRef<number>(0);

  const delayRedirectTo = (href: string) => {
    if (mainRef.current) mainRef.current.style.opacity = "0";
    const timer = setTimeout(() => {
      router.push(href);
    }, 300);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // サーバーサイドでは実行しない

    const stateList = [0, 1, 2, 3, 4, 5];

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 50 || isScrolling.current) return;

      isScrolling.current = true;
      state.current =
        e.deltaY > 0
          ? (state.current + 1) % stateList.length
          : Math.max(state.current - 1, 0);

      if (mainRef.current) {
        mainRef.current.style.transform = `translate(0, -${
          stateList[state.current] * 100
        }vh)`;
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const moveY = e.touches[0].clientY;
      const deltaY = moveY - startY.current;

      if (Math.abs(deltaY) < 10 || isScrolling.current) return;
      isScrolling.current = true;
      state.current =
        deltaY < 0
          ? (state.current + 1) % stateList.length
          : Math.max(state.current - 1, 0);

      if (mainRef.current) {
        mainRef.current.style.transform = `translate(0, -${
          stateList[state.current] * 100
        }vh)`;
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    if (mainRef.current) mainRef.current.style.opacity = "1";

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // クリーンアップ
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    // クライアントサイドのみで動作
    if (typeof window === "undefined") return;

    // 動的にlottie-webをインポート
    import("lottie-web").then((lottie) => {
      if (animationContainer.current) {
        const animationInstance = lottie.default.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          // path: "/json/241295_sp_kv_hand.json",
          path: "/json/241205_pc_kv_wip.json",
        });

        return () => {
          animationInstance.destroy(); // クリーンアップ
        };
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>NPO法人第3の家族 | どんな家族も生きやすい社会を構築する</title>
        <meta property="og:title" content="NPO法人 第３の家族" />
        <meta
          property="og:description"
          content="どんな家族も生きやすい社会を構築する。家庭環境問題のはざまの少年少女が自分の居場所を見つけるための、寄り添わない支援。 "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daisan-kazoku.com" />
        <meta property="og:image" content="https://daisan-kazoku.com/ogp.png" />
        <meta property="og:site_name" content="NPO法人 第３の家族" />
        <meta property="og:locale" content="ja_JP" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@daisan_kazoku" />
      </Head>
      <main className={styles.main} ref={mainRef}>
        <div className="view-wrapper">
          <div className="first-view top">
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
              <a
                className="page-link"
                onClick={() => delayRedirectTo("/about")}
              >
                第３の家族とは
              </a>
              <a
                className="page-link"
                onClick={() => delayRedirectTo("/service")}
              >
                事業内容
              </a>
              <a
                className="page-link"
                onClick={() => delayRedirectTo("/donation")}
              >
                寄付する
              </a>
            </div>
            <div className="footer-link-container">
              <Link href="/magazine" className="footer-link">
                <p>
                  少年少女はこちら
                  <ExternalLinkIcon
                    style={{
                      display: "inline-block",
                      width: "0.9rem",
                      marginLeft: "0.5rem",
                    }}
                  />
                </p>
              </Link>
            </div>
            {/* <a href="#" className="page-link">
              pdf
            </a> */}
          </div>

          <div ref={animationContainer} className="animation" />

          <div className="first-view">
            <p>
              「家に居場所がない」少年少女は4人に1人。
              <br />
              数は多くても明るみに出ないのは、周囲から気づきにくく、
              <br />
              本人も助けを求めるべきかわからないから。
            </p>
          </div>
          <div className="first-view">
            <p>
              虐待ってほどではない気がする。
              <br />
              でも、親との関係に違和感を感じたり、傷ついている。
              <br />
              でも、嫌いとは言い切れない。自分の親だし…。
            </p>
          </div>
          <div className="first-view">
            <p>
              その後に虐待・精神疾患・非行・
              <br />
              孤独孤立・自殺につながる可能性があります。
              <br />
              顕在化した後の支援はあるけど、もっと予防できないでしょうか？
            </p>
          </div>
          <div className="first-view">
            <p>
              そこで、第1の家族（本人の家族）
              <br />
              または、第2の家族（友達・学校・地域）
              <br />
              で自分の居場所を見つけてもらえるような、
              <br />
              第3の家族として存在します。
            </p>
          </div>

          <div className="first-view">
            <p>
              大切にしていることは「寄り添わない」。 支援らしくない構え方で、
              <br />
              今まで取りこぼされてきたはざまの少年少女たちに
              <br />
              アプローチします。
              <br />
              はざまの少年少女たちが自分の居場所を見つけられるように。
            </p>
          </div>
        </div>

        <style jsx>
          {`
            .animation {
              position: fixed;
              top: 0;
              left: 0;
              z-index: -10;
              width: 120vw;
              height: 100vh;
              transform: scale(1);
              transform-origin: center;
            }

            .image {
              position: fixed;
              z-index: -1;
              top: 20vh;
              right: 0;
              text-align: right;
            }
            .first-view {
              width: 40vw;
              height: 100vh;
              padding: 40vh 5vw;
            }

            .first-view.top {
              margin: 0 auto;
            }

            .logo {
              width: 100%;
              height: 100px;
              position: relative;
            }

            .link {
              margin-top: 2rem;
              display: flex;
              gap: 1.5rem;
              justify-content: flex-end;
            }

            .page-link {
              cursor: pointer;
              text-decoration: none;
              color: black;
              font-size: 1.4rem;
              transition: all ease 0.5s;
            }

            .page-link:hover {
              filter: blur(0.5px);
            }

            .footer-link-container {
              position: fixed;
              bottom: 5vh;
              left: 5vw;
              display: flex;
              gap: 0.5rem;
              flex-direction: column;
              a {
                color: black;
                text-decoration: none;
              }
            }

            .footer-link {
              font-size: 1rem;
            }

            @media screen and (max-width: 600px) {
              .logo {
                width: 90%;
              }

              .link {
                flex-direction: column;
                margin-top: 1rem;
                gap: 0.6rem;
              }

              .page-link {
                font-size: 1.2rem;
              }

              .footer-link-container {
                gap: 0rem;
              }

              .footer-link {
                font-size: 0.5rem;
              }

              .first-view {
                width: 100vw;
                height: 100vh;
                padding-top: 30vh;
              }
            }
          `}
        </style>
      </main>
      {/* <div className="image">
        <Image src={imageSrc} alt="diagram/status01" width={500} height={500} />
      </div> */}
    </>
  );
};

export default Home;
