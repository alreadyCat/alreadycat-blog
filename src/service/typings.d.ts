export declare namespace Api {
  type ArticleEntity = {
    id: number;

    /**
     * 文章title

     */
    title: string;

    /**
     * 文章标签
     */
    tags: string;

    /**
     * 文章类型
     */
    type: string;

    /**
     * 文章内容
     */
    content: string;

    /**
     * 文章编辑日期
     */
    date: string;

    /**
     * 文章创建日期
     */
    createTime: string;

    /**
     * 文章更新时间
     */
    updateTime: string;

    /**
     * 文章发布状态：0：未发布  1：已发布  默认：0
     */
    published: number;

    /**
     * 浏览量

     */
    viewCount: number;

    /**
     * 点赞量
     */
    likeCount: number;
  };
  type CarouselCategory = {
    id: number;
    title: string;
    date: string;
    categoryId: number;
    categoryName: string;
    coverImage: string;
  };

  type Todo = {
    id: number;
    taskName: string;
    complete: boolean;
    createTime: string;
    updateTime: string;
  };
}
