import { gql, useQuery, useMutation } from "@apollo/client";

/**
 * 
 * Simple function to shorten the url lengths
 * 
 * @params url
 *  the long url provided for shortening
 * @parms n
 *  the number of chars to trim the string by
 * @returns string trimmed to n chars long
 *
 */

export function shortenUrl(url, n) {
  return url.slice(0, n)
}

// query to return 10 links 
export const GET_LINKS = gql`
  query Links{
    links {
      url
      slug
    }
  }
`

// creates a short url if a custom slug HAS been provided
export const ADD_LINK = gql`
  mutation CreateLink($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`