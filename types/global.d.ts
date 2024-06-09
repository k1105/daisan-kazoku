declare global {
  type News = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    releaseDate: string;
    title: string;
    content: string;
    category: {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
    };
    ogp: {
      url: string;
      height: number;
      width: number;
    } | null;
  };

  type Media = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    date: string;
    title: string;
    link: string | null;
    thumbnail: {
      url: string;
      height: number;
      width: number;
    } | null;
  };
}

export {};
