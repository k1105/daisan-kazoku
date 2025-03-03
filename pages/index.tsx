import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState, cloneElement } from "react";
import { useRouter } from "next/router";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import Head from "next/head";
import Link from "next/link";
import { TopBackgroundAnimation } from "@/components/animation/TopBackgroundAnimation";
import HamburgerMenu from "@/components/HamburgerMenu";
import { DownArrowAnimation } from "@/components/animation/DownArrowAnimation";

// ------------------------------------
// 1) セクションの中身を配列化
//    （クローンしやすいように）
// ------------------------------------
const baseSections = [
  // index:0 (トップ/ロゴセクション)
  <div className={`${styles.firstView} ${styles.top}`} key="0">
    <div className={styles.logo}>
      <Image
        src="/logo.svg"
        fill
        priority
        style={{ objectFit: "contain" }}
        alt="第３の家族"
      />
    </div>
    <div className={styles.link}>
      <a className={styles.pageLink}>第３の家族とは</a>
      <a className={styles.pageLink}>事業内容</a>
      <a className={styles.pageLink}>寄付する</a>
    </div>
    <div className={styles.animationWrapper}>
      <DownArrowAnimation />
    </div>
  </div>,

  // index:1
  <div className={styles.firstView} key="1">
    <p>
      <span className={styles.segment}>「家に居場所がない」少年少女は</span>
      <span className={styles.segment}>4人に1人。</span>
      <br />
      <span className={styles.segment}>数は多くても明るみに出ないのは、</span>
      <span className={styles.segment}>周囲から気づきにくく、</span>
      <br />
      <span className={styles.segment}>本人も助けを求めるべきか</span>
      <span className={styles.segment}>わからないから。</span>
    </p>
  </div>,

  // index:2
  <div className={styles.firstView} key="2">
    <p>
      <span className={styles.segment}>虐待ってほどではない気がする。</span>
      <span className={styles.segment}>
        でも、親との関係に違和感を感じたり、
      </span>
      <span className={styles.segment}>傷ついている。</span>
      <span className={styles.segment}>でも、嫌いとは言い切れない。</span>
      <span className={styles.segment}>自分の親だし…。</span>
    </p>
  </div>,

  // index:3
  <div className={styles.firstView} key="3">
    <p>
      <span className={styles.segment}>その後に</span>
      <span className={styles.segment}>虐待・</span>
      <span className={styles.segment}>精神疾患・</span>
      <span className={styles.segment}>非行・</span>
      <span className={styles.segment}>孤独孤立・</span>
      <span className={styles.segment}>自殺につながる</span>
      <span className={styles.segment}>可能性があります。</span>
      <br />
      <span className={styles.segment}>顕在化した後の支援はあるけど、</span>
      <span className={styles.segment}>もっと予防できないでしょうか？</span>
    </p>
  </div>,

  // index:4
  <div className={styles.firstView} key="4">
    <p>
      <span className={styles.segment}>そこで、第1の家族（本人の家族）</span>
      <br />
      <span className={styles.segment}>または、第2の家族</span>
      <span className={styles.segment}>（友達・学校・地域）で</span>
      <span className={styles.segment}>
        自分の居場所を見つけてもらえるような、
      </span>
      <span className={styles.segment}>第3の家族として存在します。</span>
    </p>
  </div>,

  // index:5
  <div className={styles.firstView} key="5">
    <p>
      <span className={styles.segment}>
        大切にしていることは「寄り添わない」。
      </span>
      <span className={styles.segment}>支援らしくない構え方で、</span>
      <span className={styles.segment}>今まで取りこぼされてきた</span>
      <span className={styles.segment}>はざまの少年少女たちに</span>
      <span className={styles.segment}>アプローチします。</span>
      <br />
      <span className={styles.segment}>はざまの少年少女たちが</span>
      <span className={styles.segment}>自分の居場所を見つけられるように。</span>
    </p>
  </div>,
];

// 上下にクローンを追加して「8要素」に拡張
const extendedSections = [
  // 先頭に "最後" のクローン
  <div className={styles.firstView} key="clone-head">
    {/* clone: baseSections[5] の中身を再利用 */}
    {baseSections[5].props.children}
  </div>,
  // 中間に本物6要素
  ...baseSections,
  // 末尾に "最初" のクローン
  <div className={`${styles.firstView} ${styles.top}`} key="clone-tail">
    {/* clone: baseSections[0] の中身を再利用 */}
    {baseSections[0].props.children}
  </div>,
];

const Home = () => {
  const router = useRouter();

  // スライド位置: extendedSections（8要素）のうちどこにいるか
  // 初期値 = 1 → (クローンではなく)実際の先頭セクションを表示
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  // スクロールなどの判定用Ref
  const isScrolling = useRef<boolean>(false);
  const lastUpdatedAt = useRef<number>(Date.now());
  const startY = useRef<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);

  // PCなどのホイールスクロール時の遷移
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      // 一定時間経過＆ある程度のスクロール量 かつ 現在スクロール中でなければ
      if (
        now - lastUpdatedAt.current > 350 &&
        Math.abs(e.deltaY) > 10 &&
        !isScrolling.current
      ) {
        lastUpdatedAt.current = now;
        isScrolling.current = true;

        // deltaY>0: 下方向スクロール → index+1, それ以外 → index-1
        setCurrentIndex((prev) =>
          Math.max(
            0,
            Math.min(
              prev + (e.deltaY > 0 ? 1 : -1),
              extendedSections.length - 1
            )
          )
        );

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // スマホ等のタッチ操作時の遷移
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      const moveY = e.touches[0].clientY;
      const deltaY = moveY - startY.current;

      if (Math.abs(deltaY) < 10) return;

      isScrolling.current = true;
      setCurrentIndex((prev) =>
        Math.max(
          0,
          Math.min(prev + (deltaY < 0 ? 1 : -1), extendedSections.length - 1)
        )
      );

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // クリック時にページ遷移するもの（fade outするアニメ用）
  const delayRedirectTo = (href: string) => {
    if (mainRef.current) mainRef.current.style.opacity = "0";
    const timer = setTimeout(() => {
      router.push(href);
    }, 300);
    return () => clearTimeout(timer);
  };

  // currentIndexが変わったらtransformを更新
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    el.style.transform = `translateY(-${currentIndex * 100}vh)`;
  }, [currentIndex]);

  // transitionが終わったら、クローンにいるかどうかチェックして即座に本物へジャンプ
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    // transition: transform 0.7s ease; はCSSで設定
    const handleTransitionEnd = () => {
      // extendedSections.length = 8 → index範囲は 0～7
      // 0番 → (最後のクローン) → 本物の最後 (6) へ瞬時に戻す
      if (currentIndex === 0) {
        // 1) transition無効化
        el.style.transition = "none";

        // 2) 1フレーム目で “setState(ジャンプ)”
        requestAnimationFrame(() => {
          setCurrentIndex(baseSections.length); // 6

          // 3) 2フレーム目で transition 復帰
          requestAnimationFrame(() => {
            el.style.transition = "transform 0.5s ease";
          });
        });
      }
      // 7番 → (最初のクローン) → 本物の最初 (1) へ瞬時に戻す
      else if (currentIndex === extendedSections.length - 1) {
        // 1) transition無効化
        el.style.transition = "none";

        // 2) 1フレーム目で “setState(ジャンプ)”
        requestAnimationFrame(() => {
          setCurrentIndex(1); // 6

          // 3) 2フレーム目で transition 復帰
          requestAnimationFrame(() => {
            el.style.transition = "transform 0.5s ease";
          });
        });
      }
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      el.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  // 初回マウント時にフェードイン
  useEffect(() => {
    const el = mainRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.transition = "none";
      requestAnimationFrame(() => {
        el.style.transition = "transform 0.5s ease";
      });
    }
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
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}></div>
          <div className={styles.headerRight}>
            <HamburgerMenu />
          </div>
        </div>

        {/* 2) view-wrapper に expandedSections を並べる */}
        <div
          className={styles.viewWrapper}
          ref={mainRef}
          style={{ transition: "transform 0.5s ease" }}
        >
          {extendedSections.map((section, idx) => {
            // ここでリンクのクリックを差し込む例（トップのリンクのみ遷移を差し込む等）
            // ただし先頭クローン(0番)と末尾クローン(7番)にも全く同じ要素が入るので
            // onClickで delayRedirectTo を使いたいなら
            // baseSections[0] とか baseSections[5] 側を工夫してください
            return (
              <div key={idx} style={{ width: "100%", height: "100%" }}>
                {
                  // トップセクションの3つのリンクだけ挙動を差し替える例
                  // → ただしクローンでも同じ中身になるので注意
                  idx === 1 // 1番が本物のトップ
                    ? cloneElement(section, {
                        children: <>{section.props.children}</>,
                      })
                    : section
                }
              </div>
            );
          })}
        </div>

        <TopBackgroundAnimation />

        <div className={styles.footerLinkContainer}>
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
