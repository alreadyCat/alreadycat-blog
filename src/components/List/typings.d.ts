export declare namespace ArticleList {
  type ArticleListItem = {
    tagId: number;
    tagName: string;
    list: ArticleInfo[];
  };
  type ArticleInfo = {
    id: number;
    title: string;
    date: string;
    coverImage: string;
  };
}
