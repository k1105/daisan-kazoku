import AnnouncementItem from "./AnnouncementItem";
import { client } from "@/libs/client";
import { useState, useEffect, useRef, useCallback } from "react";

type Props = {
  initialData: News[];
  totalCount: number;
};

const AnnouncementTable = ({ initialData, totalCount }: Props) => {
  const [data, setData] = useState<News[]>(initialData);
  const [offset, setOffset] = useState(initialData.length);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialData.length < totalCount);
  const loader = useRef<HTMLDivElement | null>(null);

  const fetchMoreData = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const response = await client.get({
      endpoint: "news",
      queries: { offset, limit: 10 },
    });

    setData((prevData) => [...prevData, ...response.contents]);
    setOffset((prevOffset) => prevOffset + 10);
    setIsLoading(false);

    if (response.contents.length === 0 || totalCount <= offset + 10) {
      setHasMore(false);
    }
  }, [offset, hasMore, isLoading, totalCount]);

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
        {data &&
          data.length > 0 &&
          data.map((elem) => <AnnouncementItem key={elem.id} elem={elem} />)}
      </div>
      <div
        ref={loader}
        style={{ height: "20px", backgroundColor: "transparent" }}
      >
        {isLoading && hasMore && <p className="loading">loading...</p>}
      </div>
      <style jsx>{`
        .table {
          margin-left: 20rem;
        }

        .loading {
          line-height: 10rem;
          text-align: center;
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
