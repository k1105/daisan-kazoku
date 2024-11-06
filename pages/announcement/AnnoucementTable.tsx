import AnnouncementItem from "./AnnouncementItem";
import { client } from "@/libs/client";
import { useState, useEffect, useRef, useCallback } from "react";

const AnnouncementTable = () => {
  const [data, setData] = useState<News[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // 追加コンテンツがあるかどうかのフラグ
  const loader = useRef<HTMLDivElement | null>(null);

  const fetchMoreData = useCallback(async () => {
    if (!hasMore || isLoading) return; // 既にロード完了またはロード中なら何もしない

    setIsLoading(true);
    const response = await client.get({
      endpoint: "news",
      queries: { offset, limit: 10 },
    });

    setData((prevData) => [...prevData, ...response.contents]);
    setOffset((prevOffset) => prevOffset + 10);
    setIsLoading(false);

    // すべてのコンテンツを取得したらロードを停止
    if (response.contents.length === 0 || response.totalCount <= offset + 10) {
      setHasMore(false); // 追加データがないことを示す
    }
  }, [offset, hasMore, isLoading]);

  useEffect(() => {
    fetchMoreData();
  }, [fetchMoreData]); // 初回ロード

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

  return (
    <>
      <div className="table">
        {data.map((elem) => (
          <AnnouncementItem key={elem.id} elem={elem} />
        ))}
      </div>
      <div
        ref={loader}
        style={{ height: "20px", backgroundColor: "transparent" }}
      >
        {isLoading && hasMore && <p>loading...</p>}
      </div>
      <style jsx>{`
        .table {
          margin-left: 20rem;
        }

        @media screen and (max-width: 600px) {
          .table {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default AnnouncementTable;
