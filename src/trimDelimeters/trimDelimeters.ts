/**
 * @params `str`: The string that needs to be trimmed
 * @params `delimeters`: A list of delimeters to be trimned from the start and/or end of the string provided
 * @params `options` (optional): An object with values `trimStart` and `trimEnd` that represent if the string should only be trimmed from start and/or end respectively
 * 
 * @returns a string with the provided delimeters removed from the start and end of the provided string
 */

const trimDelimeters = (str: string, delimeters: string[], options: { trimStart?: boolean, trimEnd?: boolean } = { trimStart: true, trimEnd: true }) => {
  const { trimStart, trimEnd } = options;
  const trimLen = 0;

  if (trimStart) {
    for (let i = 0; i < str.length; i++) {
      if (delimeters.every((d) => d !== str[i])) {
        str = str.slice(i, str.length);
        break;
      }
    }
  }

  str = str.slice(trimLen, str.length);

  if (trimEnd) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (delimeters.every((d) => d !== str[i])) {
        str = str.slice(0, i + 1);
        break;
      }
    }
  }

  return str;
};

export { trimDelimeters }