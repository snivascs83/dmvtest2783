import Cookies, { CookieGetOptions } from "universal-cookie";

export const getCookieItem = (key: string, options?: CookieGetOptions): any => {
  const cookies = new Cookies(); // Create cookie object.
  return cookies.get(key, options);
};
export const BASE_API_URL_STRAPI = process.env.NEXT_PUBLIC_API_BASE_URL || "";
