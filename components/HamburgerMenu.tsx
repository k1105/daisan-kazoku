// components/NavButton.js
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.scss";
import {Logo} from "./Logo";
import {ExternalLinkIcon} from "./icons/ExternalLinkIcon";
import {SocialFacebook} from "./icons/SocialFacebook";
import {SocialX} from "./icons/SocialX";
import {SocialInstagram} from "./icons/SocialInstagram";

export default function HamburgerMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    isVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isVisible]);

  return (
    <>
      <div
        onClick={() => setIsVisible(!isVisible)}
        className={styles.buttonContainer}
      >
        <div className={`${styles.menuButton} ${isVisible && styles.open}`} />
        <p className={styles.menuTitle}>Menu</p>
      </div>
      <div
        className={`${styles.documentOverlay} ${isVisible && styles.active}`}
      />
      <div className={`${styles.navOverlay} ${isVisible && styles.visible}`}>
        <div className={styles.viewWrapper}>
          <div className={styles.firstView}>
            <nav className={styles.nav}>
              <div className={styles.logo}>
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <ul className={styles.navLink}>
                <li className={styles.list}>
                  <Link
                    href="/about"
                    className={`${styles.link} ${
                      router.pathname === "/about" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    第３の家族とは
                  </Link>
                </li>
                <li className={styles.list}>
                  <Link
                    href="/service"
                    className={`${styles.link} ${
                      router.pathname === "/service" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    事業内容
                  </Link>
                </li>
                <li className={styles.list}>
                  <Link
                    href="/announcement"
                    className={`${styles.link} ${
                      router.pathname === "/announcement" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    お知らせ
                  </Link>
                </li>
                <li className={styles.list}>
                  {/* <Link
              href="/report"
              className={`${styles.link} ${
                router.pathname === "/report" ? styles.active : ""
              }`}
            >
              レポート
            </Link> */}
                </li>
                <li className={styles.list}>
                  <Link
                    href="/data"
                    className={`${styles.link} ${
                      router.pathname === "/data" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    データ
                  </Link>
                </li>
                <li className={styles.list}>
                  <Link
                    href="/contact"
                    className={`${styles.link} ${
                      router.pathname === "/contact" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
              <div className={styles.navBottom}>
                <a
                  href="/donation"
                  className={`${styles.link} ${styles.externalLink}`}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  寄付する
                </a>
                <Link
                  href="/magazine"
                  className={`${styles.link} ${styles.externalLink}`}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  <p>メルマガ登録</p>
                </Link>
                <Link
                  href="https://daisan-ticket.studio.site/"
                  className={`${styles.link} ${styles.externalLink}`}
                >
                  <p>第３の家族に協力する</p>
                  <ExternalLinkIcon
                    style={{
                      display: "inline-block",
                      paddingTop: "-0.2rem",
                      width: "1.2rem",
                    }}
                  />
                </Link>
                <Link
                  href="https://daisan-kazoku.net"
                  className={`${styles.link} ${styles.externalLink}`}
                >
                  <p>少年少女はこちら</p>
                  <ExternalLinkIcon
                    style={{
                      display: "inline-block",
                      paddingTop: "-0.2rem",
                      width: "1.2rem",
                    }}
                  />
                </Link>

                <div className={styles.socialIcons}>
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
