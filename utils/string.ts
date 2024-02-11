export const replaceAllSpaces = (
  str: string,
  to: string = "",
  makeLowerCase: boolean = false
): string => {
  if (str) {
    const replacedStr = String(str).replace(/\s+/gi, to);
    return makeLowerCase ? replacedStr.toLowerCase() : replacedStr;
  }
  return str;
};
export const getConvertedToUrlString = (str: string): string =>
  str ? replaceAllSpaces(str, "-", true) : "";

export const textCapitalize = (str: string = "") =>
  str ? str?.charAt(0)?.toUpperCase() + str?.slice(1) : "";
