import { request } from "@/request";
import { Api } from "./typings";
import { ArticleList } from "@/components/List/typings";

export const getCategoryList = async () => {
  return request<Category.Entity[]>("/category");
};

export const getArticleList = async () => {
  return request<Api.CarouselCategory[]>("/article/list");
};

export const getWeather = async (adcode: string) => {
  return request("https://restapi.amap.com/v3/weather/weatherInfo", {
    params: {
      key: "bcd5f3d01e71819da4a00dc2e1efc71c",
      city: adcode,
      extensions: "base",
    },
  });
};

export const getUserADCode = async () => {
  return request("https://restapi.amap.com/v3/config/district?parameters", {
    params: {
      key: "bcd5f3d01e71819da4a00dc2e1efc71c",
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
      key: "bcd5f3d01e71819da4a00dc2e1efc71c",
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
