/**
 * 
 * Simple function to shorten the url lengths
 * 
 * @params url
 *  the long url provided for shortening
 * @parms num
 *  the number of char to trim the string by
 * @returns string trimmed to 25 chars long
 *
 */

export function shortenUrl(url, num) {
  return url.slice(0, num)
}