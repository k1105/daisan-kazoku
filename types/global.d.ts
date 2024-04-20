declare global {
  type Data = {
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
}

export {};
