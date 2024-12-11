import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { SocialFacebook } from "@/components/icons/SocialFacebook";
import { SocialX } from "@/components/icons/SocialX";
import { SocialInstagram } from "@/components/icons/SocialInstagram";
import hamburgerStyles from "@/styles/HamburgerMenu.module.scss";

const Home = () => {
  const router = useRouter();
  const state = useRef<number>(0);
  const animationContainer = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<boolean>(false);
  const startY = useRef<number>(0);
  const [imageSrc, setImageSrc] = useState<string>(
    "/img/diagram/status01/frame_0.png"
  );
  const imageFrameNumerRef = useRef<number>(0);

  const delayRedirectTo = (href: string) => {
    if (mainRef.current) mainRef.current.style.opacity = "0";
    const timer = setTimeout(() => {
      router.push(href);
    }, 300);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // サーバーサイドでは実行しない

    const stateList = [0, 1, 2, 3, 4, 5, 6, 7];

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

    const interval = setInterval(() => {
      imageFrameNumerRef.current = (imageFrameNumerRef.current + 1) % 63;
      setImageSrc(
        `/img/diagram/status01/frame_${imageFrameNumerRef.current}.png`
      );
    }, 50);

    if (mainRef.current) mainRef.current.style.opacity = "1";

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // クリーンアップ
    return () => {
      clearInterval(interval);
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
      <main className={styles.main} ref={mainRef}>
        <div className="view-wrapper">
          <div className="first-view">
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
                onClick={() => delayRedirectTo("/announcement")}
              >
                お知らせ
              </a>
              <a className="page-link" onClick={() => delayRedirectTo("/data")}>
                データ
              </a>
              <a
                className="page-link"
                href="mailto:info@daisan-kazoku.net" //href="/contact"
              >
                お問い合わせ
              </a>
            </div>
            <div className={hamburgerStyles.socialIcons}>
              <Link href="https://x.com/daisan_kazoku">
                <SocialX />
              </Link>
              <Link href="https://www.instagram.com/daisan_kazoku/">
                <SocialInstagram />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61550918296580">
                <SocialFacebook />
              </Link>
            </div>
            {/* <a href="#" className="page-link">
              pdf
            </a> */}
          </div>

          <div ref={animationContainer} className="animation" />

          <div className="first-view">
            <p>
              「家に居場所がない」と答える少年少女は4人に1人。
              <br />
              意外に多いはずなのに明るみに出ないのは、周囲から気づきにくく、本人も助けを求めないからです。
            </p>
          </div>
          <div className="first-view">
            <p>
              虐待をされている訳ではない。
              <br />
              でも、親との関係に違和感を感じたり、傷ついている。
              <br />
              でも、嫌いとは言い切れない。自分の親だし…。
            </p>
          </div>
          <div className="first-view">
            <p>
              虐待ではないから放っておいて良いわけではなく、
              <br />
              その後に虐待・精神疾患・非行・孤独孤立・自殺につながる可能性があります。
            </p>
          </div>
          <div className="first-view">
            <p>
              代表の奥村の家庭環境もはざまにあり
              <br />
              大学3年生の時に弟が自死をしました。
            </p>
          </div>

          <div className="first-view">
            <p>
              第1の家族（本人の家族）を居場所に感じられず、
              <br />
              第2の家族（友達・学校・地域）は既にあっても、
              <br />
              人に頼ることを知らなかったり、支援情報を知らなかったりします。
            </p>
          </div>
          <div className="first-view">
            <p>
              そこで第3の家族は、多様な選択肢を提示し
              <br />
              それらを掴み取りやすい状態をつくることで、
              <br />
              最終的には第1か第2の家族に帰着してもらうことを目指します。
            </p>
          </div>
          <div className="first-view">
            <p>
              第3の家族は「いつか忘れる」居場所になります。
              <br />
              忘れたときが、彼ら彼女らが居場所を見つけたとき。
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
              width: 100vw;
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

            .page-link {
              cursor: pointer;
              text-decoration: none;
              color: black;
              font-weight: 100;
              border-left: 1px solid #ccc;
              margin-bottom: 1rem;
              padding-left: 1rem;
              transition: all ease 0.5s;
            }

            .page-link:hover {
              filter: blur(0.5px);
            }

            @media screen and (max-width: 600px) {
              .logo {
                width: 70%;
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
