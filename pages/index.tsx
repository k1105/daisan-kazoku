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
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

// ==========================================
// Types & Interfaces
// ==========================================

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
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://daisan-kazoku.com" />
    <meta property="og:image" content="https://daisan-kazoku.com/ogp.png" />
    <meta property="og:site_name" content="NPO法人 第３の家族" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@daisan_kazoku" />
  </Head>
);

const TextSection = ({data}: {data: SegmentData}) => (
  <div className={styles.viewPort}>
    {/* グラデーション用のラッパーを追加 */}
    <div className={styles.textContainer}>
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
  </div>
);

// ==========================================
// Custom Hooks (Logic)
// ==========================================

const useScrollTextAnimation = (
  sectionsRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;

    // 初期化：y位置を減らし、動きをより繊細に
    const allChars = document.querySelectorAll(`.${styles.char}`);
    gsap.set(allChars, {opacity: 0, y: 10, filter: "blur(4px)"});

    const completedSections = new Set<number>();
    const animatedSections = new Set<number>();

    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      const chars = section.querySelectorAll(`.${styles.char}`);
      if (chars.length === 0) return;

      const animateText = () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power2.out",
          // amount: 0.5 で全文字を0.5秒以内に開始（スピーディーかつ上品に）
          stagger: {
            amount: 0.5,
            from: "start",
          },
          overwrite: "auto",
          onComplete: () => {
            completedSections.add(index);
          },
        });
      };

      // 表示トリガー
      const enterTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 50%",
        onEnter: () => {
          if (!animatedSections.has(index)) {
            animatedSections.add(index);
            animateText();
          }

          if (index > 0 && index <= SECTION_TEXTS.length) {
            const targetPhase = index - 1;
            window.triggerBackgroundAnimation?.(targetPhase);
          }
        },
        onEnterBack: () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.25,
            overwrite: true,
          });

          if (index > 0 && index <= SECTION_TEXTS.length) {
            window.triggerBackgroundAnimation?.(index - 1);
          }
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
              filter: `blur(${self.progress * 4}px)`,
              duration: 0.1,
              overwrite: "auto",
            });
          }
        },
      });
      triggers.push(leaveTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);
};

// ==========================================
// Main Component
// ==========================================

const Home = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useScrollTextAnimation(sectionsRef);

  const contentSections = useMemo(
    () => [
      <FirstView key="first-view-top" />,
      ...SECTION_TEXTS.map((data) => (
        <TextSection key={`section-${data.id}`} data={data} />
      )),
      <FirstView
        key="first-view-loop"
        showArrow={false}
        isBottomLayout={true}
      />,
    ],
    []
  );

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
          {contentSections.map((component, idx) => {
            // ▼ 追加: 最後のセクションかどうかを判定
            const isLastSection = idx === contentSections.length - 1;

            return (
              <div
                key={idx}
                ref={(el) => {
                  sectionsRef.current[idx] = el;
                }}
                // ▼ 修正: 最後のセクションには styles.sectionBottom を追加
                className={`${styles.section} ${
                  isLastSection ? styles.sectionBottom : ""
                }`}
              >
                {component}
              </div>
            );
          })}
        </div>

        <TopBackgroundAnimation />

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
