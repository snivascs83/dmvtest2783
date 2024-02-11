import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import * as APIS from "./apiUrls/index";

type TResponse = Promise<{ status: string | number; data: any }>;
type ReqPromise = AxiosPromise<any> & TResponse;
const createLogger = () => {
  const start = (taskName = "") => {
    const s = new Date().getTime();
    const end = () => {
      const e = new Date().getTime();
      const timeTakenInMs = Math.round(e - s);
      const timeTaken =
        timeTakenInMs > 1000 ? Math.round(timeTakenInMs / 1000) : timeTakenInMs;
      if (typeof window === "undefined") {
        console.warn(
          "\n\nDebug: " +
            taskName +
            "\nTime: %d" +
            `${timeTakenInMs > 1000 ? "s" : "ms"}`,
          timeTaken
        );
      }
    };
    return end;
  };

  return {
    start,
  };
};

const RestAxiosService = (
  url: any,
  method: any = "GET",
  body: any = null,
  headers: any = {},
  config: any = {}
): ReqPromise => {
  const extraConfig = typeof config === "object" ? config : {};
  const options: AxiosRequestConfig = {
    url,
    method: method,
    data: body,
    headers: headers,
  };
  if (
    method.toLowerCase() === "get" &&
    options.data &&
    typeof options.data === "object"
  ) {
    options.params = options.data;
    delete options.data;
  }

  axios.interceptors.request.use((x: any) => {
    x.meta = x.meta || {};
    x.meta.requestStartedAt = new Date().getTime();
    return x;
  });

  axios.interceptors.response.use(
    (x: any) => {
      return x;
    },
    (x) => {
      throw x;
    }
  );
  const apiLog = `[${method}] ${url}`;
  const logger = createLogger();
  const logEnd = logger.start(apiLog);
  return axios({ withCredentials: false, ...options, ...extraConfig })
    .then((res) => {
      logEnd();
      if (res.status >= 200 && res.status < 300) {
        return { ...res, data: res.data };
      } else {
        throw { status: res.status, data: res.data };
      }
    })
    .catch((e: any) => {
      logEnd();
      if (
        typeof e === "object" &&
        typeof e.response === "object" &&
        e.response?.status
      ) {
        throw { status: e.response.status, data: e.response.data };
      } else {
        console.log(e.response);
        throw {
          status: 532,
          data: "Internet connection failure or server is down",
        };
      }
    });
};

function HttpGet(
  url: any,
  params: any = null,
  headers: any = {},
  config: any = {}
): ReqPromise {
  return RestAxiosService(url, "GET", params, headers, config);
}

function HttpPost(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, "POST", body, headers, config);
}

function HttpPut(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, "PUT", body, headers, config);
}

function HttpPatch(url: any, body: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, "PATCH", body, headers, config);
}

function HttpDelete(url: any, headers: any = {}, config: any = {}) {
  return RestAxiosService(url, "DELETE", null, headers, config);
}

const URLS = {
  apis: { ...APIS },
};

const axiosApiClient = {
  URLS,
  get: HttpGet,
  post: HttpPost,
  put: HttpPut,
  patch: HttpPatch,
  delete: HttpDelete,
};

export default axiosApiClient;
