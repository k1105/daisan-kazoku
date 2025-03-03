import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import Head from "next/head";
import Link from "next/link";
import { TopBackgroundAnimation } from "@/components/animation/TopBackgroundAnimation";
import HamburgerMenu from "@/components/HamburgerMenu";
import { DownArrowAnimation } from "@/components/animation/DownArrowAnimation";

const Home = () => {
  const router = useRouter();
  const state = useRef<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<boolean>(false);
  const startY = useRef<number>(0);
  const lastDeltaY = useRef<number>(0);
  const lastUpdatedAt = useRef<number>(Date.now());

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

      if (
        Date.now() - lastUpdatedAt.current > 350 &&
        Math.abs(e.deltaY) > 10 &&
        !isScrolling.current &&
        e.deltaY * (e.deltaY - lastDeltaY.current) > 0
      ) {
        lastUpdatedAt.current = Date.now();
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
      }

      lastDeltaY.current = e.deltaY;
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
      <main className={styles.main}>
        <div className="header">
          <div className="header-left"></div>
          <div className="header-right">
            <HamburgerMenu />
          </div>
        </div>
        <div className="view-wrapper" ref={mainRef}>
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
            <div className="animation-wrapper">
              <DownArrowAnimation />
            </div>
          </div>
          <div className="first-view">
            <p>
              <span className="segment">「家に居場所がない」少年少女は</span>
              <span className="segment">4人に1人。</span>
              <br />
              <span className="segment">数は多くても明るみに出ないのは、</span>
              <span className="segment">周囲から気づきにくく、</span>
              <br />
              <span className="segment">本人も助けを求めるべきか</span>
              <span className="segment">わからないから。</span>
            </p>
          </div>
          <div className="first-view">
            <p>
              <span className="segment">虐待ってほどではない気がする。</span>
              <span className="segment">
                でも、親との関係に違和感を感じたり、
              </span>
              <span className="segment">傷ついている。</span>
              <span className="segment">でも、嫌いとは言い切れない。</span>
              <span className="segment">自分の親だし…。</span>
            </p>
          </div>
          <div className="first-view">
            <p>
              <span className="segment">その後に</span>
              <span className="segment">虐待・</span>
              <span className="segment">精神疾患・</span>
              <span className="segment">非行・</span>
              <span className="segment">孤独孤立・</span>
              <span className="segment">自殺につながる</span>
              <span className="segment">可能性があります。</span>
              <br />
              <span className="segment">顕在化した後の支援はあるけど、</span>
              <span className="segment">もっと予防できないでしょうか？</span>
            </p>
          </div>
          <div className="first-view">
            <p>
              <span className="segment">そこで、第1の家族（本人の家族）</span>
              <span className="segment">または、第2の家族</span>
              <span className="segment">（友達・学校・地域）で</span>
              <span className="segment">
                自分の居場所を見つけてもらえるような、
              </span>
              <span className="segment">第3の家族として存在します。</span>
            </p>
          </div>

          <div className="first-view">
            <p>
              <span className="segment">
                大切にしていることは「寄り添わない」。
              </span>
              <span className="segment">支援らしくない構え方で、</span>
              <span className="segment">今まで取りこぼされてきた</span>
              <span className="segment">はざまの少年少女たちに</span>
              <span className="segment">アプローチします。</span>
              <br />
              <span className="segment">はざまの少年少女たちが</span>
              <span className="segment">
                自分の居場所を見つけられるように。
              </span>
            </p>
          </div>
        </div>
        <TopBackgroundAnimation />
        <div className="footer-link-container">
          <Link href="https://daisan-kazoku.net" className="footer-link">
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

        <style jsx>
          {`
            .header {
              display: flex;
              width: 94vw;
              z-index: 120;
              position: fixed;
              top: 30px;
              right: 3vw;
              justify-content: space-between;

              .header-left {
                width: 200px;
                margin-top: 10px;
                transition: all 500ms ease;
              }

              .header-right {
                display: flex;
                align-items: center;
                gap: 2rem;
                line-height: 40px;
                a {
                  text-decoration: none;
                  color: black;
                }
              }
            }

            .animation-wrapper {
              position: absolute;
              bottom: 6rem;
              left: 0;
              width: 100%;
              display: flex;
              justify-content: center;
            }

            .view-wrapper {
              transition: opacity 0.5s ease, transform 0.7s ease;
              opacity: 0;
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
              p {
                line-height: 3rem;
                font-size: 1.2rem;
              }
            }

            .first-view.top {
              margin: 0 auto;
              position: relative;
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

            .segment {
              display: inline-block;
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
                p {
                  line-height: 2.5rem;
                  font-size: 1rem;
                }
              }

              .header-link {
                display: none;
              }

              .header {
                .header-left {
                  width: 150px;
                  z-index: 99;
                }
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
