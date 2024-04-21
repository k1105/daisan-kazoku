import React from "react";
import Link from "next/link";
import Layout from "../layout";
import { AnnouncementTable } from "../../components/annoucement/AnnoucementTable";

const Announcement = () => {
  return (
    <Layout pageTitle="お知らせ">
      <div className="main">
        <div className="container">
          <div className="header">
            <p>活動報告</p>
            <Link href=".." style={{ color: "black", textDecoration: "none" }}>
              ×
            </Link>
          </div>
          <AnnouncementTable />
        </div>
        <style jsx>{`
          .main {
          }
          .container {
            width: 60vw;
            margin: 0 20vw;
            display: flex;
            flex-direction: column;
            position: fixed;
            z-index: 1;
            height: 85vh;
            border-bottom: 1px solid #ccc;
            overflow: scroll;
          }

          .container::-webkit-scrollbar {
            display: none;
          }

          .header {
            z-index: 10;
            position: fixed;
            width: 60vw;
            font-size: 1.5rem;
            font-weight: 100;
            display: flex;
            justify-content: space-between;
            height: 6rem;
            line-height: 6rem;
            border-bottom: 1px solid #ccc;
            background-color: #fafafa;
          }

          @media screen and (max-width: 600px) {
            .header {
              width: 94vw;
            }
            .header p {
              font-size: 1.5rem;
              line-height: 6rem;
            }
            .container {
              width: 94vw;
              margin: 0 3vw;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Announcement;
