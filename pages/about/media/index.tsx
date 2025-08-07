import Layout from "@/pages/layout";
import {client} from "@/libs/client";
import {useState, useEffect, useCallback} from "react";
import ArticleCard from "@/pages/about/ArticleCard";
import styles from "./Media.module.scss";

const Media = () => {
  const [data, setData] = useState<Media[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const offset = (page - 1) * itemsPerPage;
      const response = await client.get({
        endpoint: "media",
        queries: {
          offset,
          limit: itemsPerPage,
          orders: "-date", // 日付順（降順）でソート
        },
      });

      if (response?.contents) {
        setData(response.contents);
        setTotalCount(response.totalCount || 0);
      }
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // データ取得完了後にスクロール
  useEffect(() => {
    if (!isLoading && currentPage > 1) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isLoading, currentPage]);

  // ページネーションのページ番号を生成
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <Layout pageTitle="メディア・登壇・出展一覧">
        <h1 style={{fontWeight: "100", marginBottom: "3rem"}}>
          メディア・登壇・出展一覧
        </h1>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            {Array.from({length: itemsPerPage}).map((_, index) => (
              <div key={index} className={styles.skeletonItem}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTitle}></div>
                  <div className={styles.skeletonDate}></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={styles.mediaContainer}>
              {data?.map((elem, index) => (
                <ArticleCard
                  date={elem.date.split("T")[0]}
                  key={index}
                  headline={elem.title}
                  image={elem.thumbnail ? elem.thumbnail.url : ""}
                  url={elem.link}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || isLoading}
                  className={styles.paginationButton}
                >
                  &lt;
                </button>

                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (typeof page === "number") {
                        handlePageChange(page);
                      }
                    }}
                    disabled={page === "..." || isLoading}
                    className={`${styles.paginationButton} ${
                      page === currentPage ? styles.active : ""
                    } ${page === "..." ? styles.ellipsis : ""}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || isLoading}
                  className={styles.paginationButton}
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </Layout>
    </>
  );
};

export default Media;
