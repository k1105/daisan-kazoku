// components/NavButton.js
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "@/styles/Layout.module.css";
import { Logo } from "./Logo";

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
                  href="https://syncable.biz/associate/daisan-kazoku"
                  className={classes.link}
                >
                  <div className={classes.navButton}>寄付する</div>
                </Link>
                <Link href="https://daisan-kazoku.net" className={classes.link}>
                  <div className={classes.navButton}>少年少女はこちら</div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <style jsx>{`
        .menu-button {
          position: fixed;
          top: 30px;
          right: 3vw;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          z-index: 120;
          transition: background-color 1s ease-in;
        }

        .menu-button.open {
          background-color: white;
        }

        .nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 110;
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
          margin: 5vw 30px;
        }
        .logo {
          width: 200px;
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
            margin-top: 20vh;
            width: 70%;
          }

          .first-view {
            width: 94vw;
            margin: 5vh 3vw;
          }
        }
      `}</style>
    </>
  );
}
