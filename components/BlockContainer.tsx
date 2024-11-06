import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Article.module.scss";

const BlockContainer: React.FC<{
  children: React.ReactNode;
  color?: "green" | "gray";
}> = ({ children, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // ビューポートに入ったら監視を停止
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.blockContainer} fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${color == "gray" ? styles.gray : ""} ${
        color == "green" ? styles.green : ""
      }`}
      ref={domRef}
    >
      {children}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out,
            color 3s ease-out;
          color: var(--light-green);
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
          color: black;
        }
      `}</style>
    </div>
  );
};

export default BlockContainer;
