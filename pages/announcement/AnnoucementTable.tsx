import AnnouncementItem from "./AnnouncementItem";
import {client} from "@/libs/client";
import {useState, useEffect, useCallback} from "react";
import styles from "@/styles/Announcement.module.scss";

type Props = {
  initialData: News[];
  totalCount: number;
};

const AnnouncementTable = ({initialData, totalCount}: Props) => {
  const [data, setData] = useState<News[]>(initialData || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openItemId, setOpenItemId] = useState<string>("");

  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const offset = (page - 1) * itemsPerPage;
      const response = await client.get({
        endpoint: "news",
        queries: {
          offset,
          limit: itemsPerPage,
          orders: "-releaseDate", // 日付順（降順）でソート
        },
      });

      if (response?.contents) {
        setData(response.contents);
      }
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentPage === 1) {
      setData(initialData || []);
    } else {
      fetchData(currentPage);
    }
  }, [currentPage, initialData, fetchData]);

  const handlePageChange = (page: number) => {
    console.log("handlePageChange called with page:", page);
    setCurrentPage(page);
    setOpenItemId(""); // ページ変更時に開いているアイテムを閉じる
  };

  // データ取得完了後にスクロール
  useEffect(() => {
    if (!isLoading && currentPage > 1) {
      console.log("Data loaded, scrolling to top...");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isLoading, currentPage]);

  const handleToggle = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? "" : id));
  };

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
      <div className={styles.table}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            {Array.from({length: itemsPerPage}).map((_, index) => (
              <div key={index} className={styles.skeletonItem}>
                <div className={styles.skeletonHeader}></div>
                <div className={styles.skeletonContent}></div>
              </div>
            ))}
          </div>
        ) : data.length > 0 ? (
          data.map((elem) => (
            <AnnouncementItem
              key={elem.id}
              elem={elem}
              isOpen={openItemId === elem.id}
              onToggle={handleToggle}
            />
          ))
        ) : (
          <p>データがありません</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => {
              console.log(
                "Previous button clicked, current page:",
                currentPage
              );
              handlePageChange(currentPage - 1);
            }}
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
                  console.log(
                    "Page number clicked:",
                    page,
                    "current page:",
                    currentPage
                  );
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
            onClick={() => {
              console.log("Next button clicked, current page:", currentPage);
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage === totalPages || isLoading}
            className={styles.paginationButton}
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
};

export default AnnouncementTable;
