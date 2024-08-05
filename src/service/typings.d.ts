export declare namespace Api {
  type Page<T> = {
    records: T[];
    total: number;
    current: number;
    size: number;
    pages: number;
  }

  type PageQueryParam<T extends Record<string, any> = {}> = {
    pageNum: number;
    pageSize: number;
  } & T


  type ArticleEntity = {
    id: number;
    title: string;
    tags: Tag[];
    type: string;
    content: string;
    createTime: string;
    updateTime: string;
    published: number;
    viewCount: number;
    likeCount: number;
    wordCount: number;
    coverImage: string;
    categoryId: number;
    categoryName: string;
    publishingLocation: string;
  };
  type CarouselCategory = {
    id: number;
    title: string;
    date: string;
    categoryId: number;
    name: string;
    coverImage: string;
    tags: string[];
  };

  type Todo = {
    id: number;
    taskName: string;
    complete: boolean;
    createTime: string;
    updateTime: string;
    completionTime: string;
  };

  type Tag = {
    id: number;
    name: string;
  }

  type CategoryEntity = {

    id: number

    /**
     * 分类名
     */
    name: string

    /**
     * 分类图片网络地址

     */
    categoryImageUrl: string

    /**
     * 分类下有多少文章
     */
    articleCount: number
  }


  type StatisticType = {
    articleCount: number;
    tagCount: number;
    categoryCount: number;
  }


  type SiteStatisticType = {
    articleCount: number;
    buildSiteDays: number;
    wordCount: number;
    categoryStats: {
      id: number;
      categoryName: string
      count: number;
    }[];
    tagsStats: {
      id: number;
      tagName: string
      count: number;
    }[];
    articleStats: {
      time: string
      count: number;
    }[]
  }

  type Talk = {

    id: number

    /**
     * 内容
     */
    content: string

    /**
     * 
     */
    createTime: string

    /**
     * 
     */
    updateTime: string

    /**
     * 发布位置
     */
    location: string

    /**
     * 图片网络地址，以逗号分割
     */
    images: string
  }

  type Photo = {
    id: number

    /**
     * 
     */
    photoSrc: string

    /**
     * 
     */
    createTime: string

    /**
     * 
     */
    updateTime: string

    /**
     * 照片拍摄地
     */
    location: string

    /**
     * 照片描述
     */
    description: string

    /**
     * 冗余字段，关联相册Id
     */
    ablumId: number
  }


  type Navigation = {

    id: number

    /**
     * 
     */
    name: string

    /**
     * 
     */
    description: string

    /**
     * 
     */
    href: string

    /**
     * 
     */
    coverImage: string

    /**
     * 
     */
    type: number

    /**
     * 
     */
    createTime: string

    /**
     * 
     */
    updateTime: string
  }
}
