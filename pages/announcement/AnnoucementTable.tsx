import AnnouncementItem from "./AnnouncementItem";
import { client } from "@/libs/client";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "@/styles/Announcement.module.scss";

type Props = {
  initialData: News[];
  totalCount: number;
};

const AnnouncementTable = ({ initialData, totalCount }: Props) => {
  const [data, setData] = useState<News[]>(initialData || []);
  const [offset, setOffset] = useState(initialData ? initialData.length : 0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialData ? initialData.length < totalCount : false
  );
  const [openItemId, setOpenItemId] = useState<string>(""); // 現在開かれているアイテムのID
  const loader = useRef<HTMLDivElement | null>(null);

  const fetchMoreData = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const response = await client.get({
        endpoint: "news",
        queries: { offset, limit: 10 },
      });

      if (response?.contents && response.contents.length > 0) {
        setData((prevData) => [...prevData, ...response.contents]);
        setOffset((prevOffset) => prevOffset + 10);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  }, [offset, hasMore, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          fetchMoreData();
        }
      },
      { threshold: 1.0 }
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [fetchMoreData, isLoading, hasMore]);

  // `onToggle` ハンドラー
  const handleToggle = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? "" : id)); // 同じIDなら閉じる
  };

  return (
    <>
      <div className={styles.table}>
        {data.length > 0 ? (
          data.map((elem) => (
            <AnnouncementItem
              key={elem.id}
              elem={elem}
              isOpen={openItemId === elem.id} // 現在開いているかどうか
              onToggle={handleToggle} // トグル処理
            />
          ))
        ) : (
          <p>データがありません</p>
        )}
      </div>
      <div
        ref={loader}
        style={{ height: "20px", backgroundColor: "transparent" }}
      >
        {isLoading && hasMore && <p className={styles.loading}>loading...</p>}
      </div>
    </>
  );
};

export default AnnouncementTable;
