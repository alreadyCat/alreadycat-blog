export declare namespace Api {
  type ArticleEntity = {
    id: number;
    title: string;
    tags: string[];
    type: string;
    content: string;
    date: string;
    createTime: string;
    updateTime: string;
    published: number;
    viewCount: number;
    likeCount: number;
    coverImage: string;
  };
  type CarouselCategory = {
    id: number;
    title: string;
    date: string;
    categoryId: number;
    categoryName: string;
    coverImage: string;
    tags: string[];
  };

  type Todo = {
    id: number;
    taskName: string;
    complete: boolean;
    createTime: string;
    updateTime: string;
  };
}
