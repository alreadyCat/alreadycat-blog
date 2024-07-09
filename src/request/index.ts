import axios, { AxiosRequestConfig } from "axios";


const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return Promise.reject(res);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown>
): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      ...options,
    })
      .then((res) => {
        resolve(res.data || res);
      })
      .catch((err) => reject(err));
  });
};

export { instance, request };
