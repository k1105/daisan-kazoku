// components/NavButton.js
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "@/styles/HamburgerMenu.module.scss";
import { Logo } from "./Logo";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";
import { SocialFacebook } from "./icons/SocialFacebook";
import { SocialX } from "./icons/SocialX";
import { SocialInstagram } from "./icons/SocialInstagram";

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
        className="button-container"
      >
        <div className={`menu-button ${isVisible && "open"}`} />
        <p>Menu</p>
      </div>
      <div className={`document-overlay ${isVisible && "active"}`} />
      <div className={`nav-overlay ${isVisible && "visible"}`}>
        <div className="view-wrapper">
          <div className="first-view">
            <nav className={classes.nav}>
              <div className={classes.logo}>
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <ul className={classes.navLink}>
                <li className={classes.list}>
                  <Link
                    href="/about"
                    className={`${classes.link} ${
                      router.pathname === "/about" ? classes.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    第３の家族とは
                  </Link>
                </li>
                <li className={classes.list}>
                  <Link
                    href="/service"
                    className={`${classes.link} ${
                      router.pathname === "/service" ? classes.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    事業内容
                  </Link>
                </li>
                <li className={classes.list}>
                  <Link
                    href="/announcement"
                    className={`${classes.link} ${
                      router.pathname === "/announcement" ? classes.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    お知らせ
                  </Link>
                </li>
                <li className={classes.list}>
                  {/* <Link
              href="/report"
              className={`${classes.link} ${
                router.pathname === "/report" ? classes.active : ""
              }`}
            >
              レポート
            </Link> */}
                </li>
                <li className={classes.list}>
                  <Link
                    href="/data"
                    className={`${classes.link} ${
                      router.pathname === "/data" ? classes.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    データ
                  </Link>
                </li>
                <li className={classes.list}>
                  <Link
                    href="/contact"
                    className={`${classes.link} ${
                      router.pathname === "/contact" ? classes.active : ""
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
              <div className={classes.navBottom}>
                <Link
                  href="/donation"
                  className={`${classes.link} ${classes.externalLink}`}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  寄付する
                </Link>
                <Link
                  href="/magazine"
                  className={`${classes.link} ${classes.externalLink}`}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  <p>メルマガ登録</p>
                </Link>
                <Link
                  href="https://daisan-ticket.studio.site/"
                  className={`${classes.link} ${classes.externalLink}`}
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
                  className={`${classes.link} ${classes.externalLink}`}
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

                <div className={classes.socialIcons}>
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
      <style jsx>{`
        .button-container {
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 1rem;
          p {
            line-height: 1rem;
          }
        }

        .menu-button {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: var(--dark-gray);
          mix-blend-mode: difference;
          cursor: pointer;
          transition: background-color 300ms ease-in;
        }

        .menu-button.open {
          background-color: #ddd;
        }

        .document-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          z-index: 0;
          opacity: 0;
          pointer-events: none;
          transition: all 1s ease;
        }

        .document-overlay.active {
          opacity: 0.3;
        }

        .nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          clip-path: circle(0% at calc(97vw - 20px) 55px);
          transition: clip-path 1s ease-in-out;
        }

        .nav-overlay.visible {
          clip-path: circle(200% at calc(97vw - 20px) 55px);
        }

        .view-wrapper {
          width: 100vw;
          height: 100vh;
        }

        .first-view {
          margin: 35vh 10vw 0;
        }

        @media screen and (max-width: 600px) {
          .first-view {
            width: 94vw;
            margin: 5vh 3vw;
          }
        }
      `}</style>
    </>
  );
}
