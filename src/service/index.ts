
import { request } from "@/request";
import { Api } from "./typings";
import { ArticleList } from "@/components/List/typings";

export const getCategoryList = async () => {
  return request<Category.Entity[]>("/category");
};

export const getArticleList = async (pageNum: number = 1, pageSize: number = 10) => {
  return request<Api.Page<Api.ArticleEntity>>("/article/list", {
    params: {
      pageNum,
      pageSize
    }
  });
};

export const getWeather = async (adcode: string) => {
  return request("https://restapi.amap.com/v3/weather/weatherInfo", {
    params: {
      key: import.meta.env.VITE_AMAP_API_KEY,
      city: adcode,
      extensions: "base",
    },
  });
};

export const getUserADCode = async () => {
  return request("https://restapi.amap.com/v3/config/district?parameters", {
    params: {
      key: import.meta.env.VITE_AMAP_API_KEY,
      subdistrict: "0",
    },
  });
};

export const getUserIp = async () => {
  return request<{
    adcode: string;
    city: string;
    info: string;
    infocode: string;
    province: string;
    rectangle: string;
    status: string;
  }>("https://restapi.amap.com/v3/ip", {
    params: {
      key: import.meta.env.VITE_AMAP_API_KEY,
    },
  });
};

export const getTodoList = async () => {
  return request<Api.Todo[]>("/todo/list");
};

export const getArticleById = async (id: number) => {
  return request<Api.ArticleEntity>(`/article/getArticleDetail/${id}`);
};

export const getArticleListGroupByTag = async () => {
  return request<ArticleList.ArticleListItem[]>("/article/getAllGroupByTag");
};

export const getRecentlyReleaseArticle = async () => {
  return request<ArticleList.ArticleInfo[]>("/article/getRecentlyRelease");
};


export const getArticlePage = async ({ pageNum, pageSize, ...data }: Api.PageQueryParam<{
  id?: number
  title?: string;
  categoryId?: number
  categoryName?: string;
  tagId?: number;
  tagName?: string;
  begin?: string;
  end?: string;
}>) => {
  return request<Api.Page<Api.ArticleEntity>>("/article/getSimpleArticlePage", {
    params: {
      pageNum, pageSize
    },
    data,
    method: "post"
  })
}

export const getTagList = async () => {
  return request<Api.Tag[]>("/tag/list");
};


export const getCateList = async () => {
  return request<Api.CategoryEntity[]>("/category/list");
};


export const getArticleStatistics = async () => {
  return request<Api.StatisticType>("/articleStatistic");
};


export const getTimeLine = async () => {
  return request<Api.Todo[]>("/todo/complete");
};


export const getSiteStatistic = async () => {
  return request<Api.SiteStatisticType>("/siteStatistic");
};


export const getTalkList = async () => {
  return request<Api.Talk[]>("/talk/list");
};

export const getPhotoPage = async (params: Api.PageQueryParam) => {
  return request<Api.Page<Api.Photo>>("/photo/list", {
    params
  });
};
export const getPhotoList = async (params: Api.PageQueryParam) => {
  return request<Api.Photo[]>("/photo/list", {
    params
  });
};


export const getNavigationList = async () => {
  return request<{
    [key:string]:Api.Navigation[]
  }>("/navigation/listByType");
};