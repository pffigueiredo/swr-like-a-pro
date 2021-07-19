import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

const BASE_HEADERS = {
  Accept: "application/json",
  "content-type": "application/json;charset=UTF-8",
};

export type FetcherConfig = AxiosRequestConfig;

const fetcher = async <T>(url: string, options?: FetcherConfig): Promise<T> => {
  const { headers, ...axiosOptions } = options || {};

  const parsedOptions = {
    ...axiosOptions,
    headers: {
      ...BASE_HEADERS,
      ...(headers || {}),
    },
  };

  const res = await axiosInstance(url, parsedOptions);
  return res?.data;
};

export default fetcher;
