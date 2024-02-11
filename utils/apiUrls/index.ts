import { BASE_API_URL_STRAPI } from "..";

export const BASE_API_URL = BASE_API_URL_STRAPI;

export const LOG_IN = BASE_API_URL + "/api/auth/local";
export const SIGN_UP = BASE_API_URL + "/api/auth/local/register";
export const TEST_PAGE = BASE_API_URL + "/api/practice-tests";

export const STATE_DATA = BASE_API_URL + "/api/states?locale=en&populate=*";
export const Landing_Page =
  BASE_API_URL + "/api/pages?populate=*&filters[id]=1";
