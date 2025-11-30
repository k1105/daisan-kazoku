import styles from "@/styles/Home.module.scss";
import {useEffect, useRef, useState} from "react";
import {ExternalLinkIcon} from "@/components/icons/ExternalLinkIcon";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import {TopBackgroundAnimation} from "@/components/animation/TopBackgroundAnimation";
import HamburgerMenu from "@/components/HamburgerMenu";
import {FirstView} from "@/components/FirstView";
import {gsap} from "gsap";

const baseSections = [
  <FirstView key="0" />,
  <div className={styles.viewPort} key="1">
    <p>
      <span className={styles.segment}>
        {"少子化なのにも関わらず、".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"こどもの自殺、虐待、不登校は増加。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
    </p>
  </div>,

  <div className={styles.viewPort} key="2">
    <p>
      <span className={styles.segment}>
        {"家、学校、病気、価値観、".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"色々な悩みがあるけど".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <br />
      <span className={styles.segment}>
        {"共通するのは「どうしようもない」".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
    </p>
  </div>,

  <div className={styles.viewPort} key="3">
    <p>
      <span className={styles.segment}>
        {"繋がりが薄くなりやすく、".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"個人化した社会の中で".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <br />
      <span className={styles.segment}>
        {"「どうしようもない」を共有できる場が".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"減っているのかもしれません。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
    </p>
  </div>,

  <div className={styles.viewPort} key="4">
    <p>
      <span className={styles.segment}>
        {"「どうしようもない」も「大丈夫」".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"と思えるように。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"第1の家族（本人の家族）".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"または第2の家族（地域社会）".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"で居場所を見つけてもらえるような、".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"第3の家族として存在します。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
    </p>
  </div>,

  <div className={styles.viewPort} key="5">
    <p>
      <span className={styles.segment}>
        {"そして、少年少女が大人になったときに".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"問題の負の連鎖が止まるように。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <br/>
      <span className={styles.segment}>
        {"「大人になる前に死にたい」".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"世界が終わるように。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <br/>
      <span className={styles.segment}>
        {"未来の問題の".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
      <span className={styles.segment}>
        {"根本的解決を目指します。".split("").map((char, i) => (
          <span key={i} className={styles.char}>
            {char}
          </span>
        ))}
      </span>
    </p>
  </div>,
];

// ループ構造のために最後にFirstViewを追加（矢印なし）
const loopedSections = [
  ...baseSections,
  <FirstView key="loop" showArrow={false} />,
];

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [animationPhase, setAnimationPhase] = useState<number>(0);

  // アニメーション完了時のコールバック
  const handleAnimationComplete = (sectionIndex: number) => {
    console.log(
      `🎬 Background animation completed for section ${sectionIndex}`
    );
    // 自動連続実行を削除 - セクション表示時のみトリガー
  };

  // ScrollTriggerを使用した文字アニメーション
  useEffect(() => {
    if (typeof window === "undefined") return;

    const {ScrollTrigger} = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const sections = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;

    // 全ての文字を初期状態に設定
    const allChars = document.querySelectorAll(`.${styles.char}`);
    gsap.set(allChars, {opacity: 0, y: 15, filter: "blur(2px)"});

    let animatedSections = new Set<number>();
    let animationQueue: {index: number; animate: () => void}[] = [];
    let isAnimating = false;
    let completedSections = new Set<number>();

    // アニメーションキューを処理する関数
    const processQueue = () => {
      if (isAnimating || animationQueue.length === 0) return;

      isAnimating = true;
      const {index, animate} = animationQueue.shift()!;

      if (!animatedSections.has(index)) {
        animatedSections.add(index);
        animate();
      } else {
        isAnimating = false;
        processQueue(); // 次のアニメーションを処理
      }
    };

    // 各セクションの文字アニメーション設定
    sections.forEach((section, index) => {
      const chars = section.querySelectorAll(`.${styles.char}`);

      if (chars.length > 0) {
        // アニメーション関数を作成
        const animateSection = () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
            onComplete: () => {
              completedSections.add(index);
              isAnimating = false;

              // セクション表示時に背景アニメーションをトリガー
              if (index > 0 && index <= 4) {
                // セクション1-4に対応するアニメーション
                console.log(
                  `📝 Section ${index} animation completed, triggering background animation`
                );
                if (
                  typeof window !== "undefined" &&
                  (window as any).triggerBackgroundAnimation
                ) {
                  (window as any).triggerBackgroundAnimation(index - 1); // 0-based index
                }
              }

              setTimeout(() => {
                processQueue(); // 次のアニメーションを処理
              }, 200);
            },
          });
        };

        // ScrollTriggerでセクションの可視状態を監視
        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          end: "bottom 50%",
          onEnter: () => {
            // キューに追加
            animationQueue.push({index, animate: animateSection});
            processQueue();
          },
          onEnterBack: () => {
            // 戻ってきたときはすぐに表示
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.25,
              ease: "power2.out",
            });
          },
        });

        // フェードアウト用の別のScrollTrigger
        ScrollTrigger.create({
          trigger: section,
          start: "bottom 50%",
          end: "bottom top",
          scrub: true,
          onUpdate: (self: any) => {
            // アニメーション完了後のみフェードアウトを適用
            if (completedSections.has(index)) {
              gsap.to(chars, {
                opacity: 1 - Math.pow(self.progress, 0.5) * 0.95, // さらに急激に見えなくなる
                filter: `blur(${self.progress * 0.5}px)`,
                duration: 0.1,
                ease: "none",
              });
            }
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
    };
  }, []);

  return (
    <>
      <Head>
        <title>NPO法人第3の家族 | 寄り添わない支援</title>
        <meta
          name="description"
          content="はざまの少年少女が生きたいと思える社会をつくる。寄り添わない支援。Web事業を中心に、オフラインイベントや研究も行う。"
        />
        <meta property="og:title" content="NPO法人 第３の家族" />
        <meta
          property="og:description"
          content="はざまの少年少女が生きたいと思える社会をつくる。寄り添わない支援。Web事業を中心に、オフラインイベントや研究も行う。"
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

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P39BNFHKK3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P39BNFHKK3');
        `}
      </Script>

      <main className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}></div>
          <div className={styles.headerRight}>
            <HamburgerMenu />
          </div>
        </div>

        <div className={styles.viewWrapper} ref={mainRef}>
          {loopedSections.map((section, idx) => (
            <div
              key={idx}
              ref={(el) => {
                sectionsRef.current[idx] = el;
              }}
              className={styles.section}
            >
              {section}
            </div>
          ))}
        </div>

        <TopBackgroundAnimation onSectionVisible={handleAnimationComplete} />

        <div className={styles.stickyFooterLink}>
          <Link href="https://daisan-kazoku.net" className={styles.footerLink}>
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
      </main>
    </>
  );
};

export default Home;
