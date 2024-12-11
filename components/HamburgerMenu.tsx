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
  const navOverlay = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    isVisible
      ? navOverlay.current?.classList.add("visible")
      : navOverlay.current?.classList.remove("visible");

    isVisible
      ? buttonRef.current?.classList.add("open")
      : buttonRef.current?.classList.remove("open");

    isVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isVisible]);

  return (
    <>
      <div ref={buttonRef} className="menu-button" onClick={handleClick} />
      <div ref={navOverlay} className="nav-overlay">
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
                  >
                    データ
                  </Link>
                </li>
                <li className={classes.list}>
                  <Link
                    href="mailto:info@daisan-kazoku.net" //href="/contact"
                    className={`${classes.link} ${
                      router.pathname === "/contact" ? classes.active : ""
                    }`}
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
              <div className={classes.navBottom}>
                <Link
                  href="/donation"
                  className={`${classes.link} ${classes.externalLink}`}
                >
                  寄付する
                </Link>
                <Link
                  href="/magazine"
                  className={`${classes.link} ${classes.externalLink}`}
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
        .menu-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--dark-gray);
          cursor: pointer;
          transition: background-color 1s ease-in;
          z-index: 10;
        }

        .menu-button.open {
          background-color: #ddd;
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
