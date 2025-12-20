import styles from "@/styles/Home.module.scss";
import {useEffect, useRef, useMemo} from "react";
import {ExternalLinkIcon} from "@/components/icons/ExternalLinkIcon";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import {TopBackgroundAnimation} from "@/components/animation/TopBackgroundAnimation";
import HamburgerMenu from "@/components/HamburgerMenu";
import {FirstView} from "@/components/FirstView";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"; // 修正: 明示的なインポート推奨

// ==========================================
// Types & Interfaces
// ==========================================

// windowオブジェクトの拡張（any回避）
interface CustomWindow extends Window {
  triggerBackgroundAnimation?: (index: number) => void;
}
declare let window: CustomWindow;

type SegmentData = {
  id: number;
  segments: string[];
  breaks?: number[];
};

// ==========================================
// Constants (Data)
// ==========================================

const SECTION_TEXTS: SegmentData[] = [
  {
    id: 1,
    segments: [
      "少子化なのにも関わらず、",
      "こどもの自殺、虐待、不登校は増加。",
    ],
  },
  {
    id: 2,
    segments: [
      "家、学校、病気、価値観、",
      "色々な悩みがあるけど",
      "共通するのは「どうしようもない」",
    ],
    breaks: [1],
  },
  {
    id: 3,
    segments: [
      "繋がりが薄くなりやすく、",
      "個人化した社会の中で",
      "「どうしようもない」を共有できる場が",
      "減っているのかもしれません。",
    ],
    breaks: [1],
  },
  {
    id: 4,
    segments: [
      "「どうしようもない」も「大丈夫」",
      "と思えるように。",
      "第1の家族（本人の家族）",
      "または第2の家族（地域社会）",
      "で居場所を見つけてもらえるような、",
      "第3の家族として存在します。",
    ],
  },
  {
    id: 5,
    segments: [
      "そして、少年少女が大人になったときに",
      "問題の負の連鎖が止まるように。",
      "「大人になる前に死にたい」",
      "世界が終わるように。",
      "未来の問題の",
      "根本的解決を目指します。",
    ],
    breaks: [1, 3],
  },
];

// ==========================================
// Sub Components
// ==========================================

const SEOHead = () => (
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
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@daisan_kazoku" />
  </Head>
);

// テキストレンダリング用コンポーネント
const TextSection = ({data}: {data: SegmentData}) => {
  return (
    <div className={styles.viewPort}>
      <p>
        {data.segments.flatMap((segment, segmentIndex) => [
          <span className={styles.segment} key={`seg-${segmentIndex}`}>
            {segment.split("").map((char, i) => (
              <span key={`char-${i}`} className={styles.char}>
                {char}
              </span>
            ))}
          </span>,
          ...(data.breaks?.includes(segmentIndex)
            ? [<br key={`br-${segmentIndex}`} />]
            : []),
        ])}
      </p>
    </div>
  );
};

// ==========================================
// Custom Hooks (Logic)
// ==========================================

const useScrollTextAnimation = (
  sectionsRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // nullを除外
    const sections = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;

    // 初期状態セット
    const allChars = document.querySelectorAll(`.${styles.char}`);
    gsap.set(allChars, {opacity: 0, y: 15, filter: "blur(2px)"});

    // アニメーション管理変数
    const animatedSections = new Set<number>();
    const completedSections = new Set<number>();
    const animationQueue: {index: number; animate: () => void}[] = [];
    let isAnimating = false;

    // キュー処理
    const processQueue = () => {
      if (isAnimating || animationQueue.length === 0) return;

      isAnimating = true;
      const {index, animate} = animationQueue.shift()!;

      if (!animatedSections.has(index)) {
        animatedSections.add(index);
        animate();
      } else {
        isAnimating = false;
        processQueue();
      }
    };

    // 各セクションの設定
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      const chars = section.querySelectorAll(`.${styles.char}`);
      if (chars.length === 0) return;

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

            // 背景アニメーションのトリガー (index 0はFirstViewなので、1-4が対象)
            if (index > 0 && index <= 4) {
              console.log(
                `📝 Triggering background animation for index: ${index - 1}`
              );
              window.triggerBackgroundAnimation?.(index - 1);
            }

            setTimeout(processQueue, 200);
          },
        });
      };

      // 表示トリガー
      const enterTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "bottom 50%",
        onEnter: () => {
          animationQueue.push({index, animate: animateSection});
          processQueue();
        },
        onEnterBack: () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.25,
            ease: "power2.out",
          });
        },
      });
      triggers.push(enterTrigger);

      // フェードアウトトリガー
      const leaveTrigger = ScrollTrigger.create({
        trigger: section,
        start: "bottom 50%",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (completedSections.has(index)) {
            gsap.to(chars, {
              opacity: 1 - Math.pow(self.progress, 0.5) * 0.95,
              filter: `blur(${self.progress * 0.5}px)`,
              duration: 0.1,
              ease: "none",
              overwrite: "auto", // 競合を防ぐ
            });
          }
        },
      });
      triggers.push(leaveTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      // ScrollTrigger.getAll().forEach(t => t.kill()); // 必要に応じて全体削除
    };
  }, [sectionsRef]);
};

// ==========================================
// Main Component
// ==========================================

const Home = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // アニメーションロジックの呼び出し
  useScrollTextAnimation(sectionsRef);

  // 表示要素の構成（FirstView + TextSections + Last FirstView）
  // useMemoを使うことで不要な再計算を防ぐ
  const contentSections = useMemo(
    () => [
      <FirstView key="first-view-top" />,
      ...SECTION_TEXTS.map((data) => (
        <TextSection key={`section-${data.id}`} data={data} />
      )),
      <FirstView key="first-view-loop" showArrow={false} />,
    ],
    []
  );

  // 背景アニメーション完了時のコールバック
  const handleAnimationComplete = (sectionIndex: number) => {
    // 必要に応じてログ出力など
    // console.log(`🎬 Background animation completed: ${sectionIndex}`);
  };

  return (
    <>
      <SEOHead />

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
        <div className={styles.header}>
          <div className={styles.headerLeft}></div>
          <div className={styles.headerRight}>
            <HamburgerMenu />
          </div>
        </div>

        <div className={styles.viewWrapper}>
          {contentSections.map((component, idx) => (
            <div
              key={idx}
              ref={(el) => {
                sectionsRef.current[idx] = el;
              }}
              className={styles.section}
            >
              {component}
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
