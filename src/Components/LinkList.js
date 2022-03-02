import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy, AiOutlineSend } from 'react-icons/ai'
import { shortenUrl } from "../utils/api";

const GET_LINKS = gql`
  query Links{
    links {
      url
      slug
    }
  }
`

export default function LinkList() {
  // const [hover, setHover] = React.useState(false);
  const { loading, error, data } = useQuery(GET_LINKS);
  const BASE_URL = `http://localhost:4000`;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex flex-col justify-center">
      <h4 className="flex justify-center align-center p-1 text-md font-bold">Previous URLs:</h4>
    {
      data.links.map((link, index) => {
        return (
          <div key={index} className="flex flex-row justify-center grid-cols-2 gap-10 items-start">
            <p 
              className="text-left"
            >{shortenUrl(link.url, 35)}...</p>
            <p
              className="text-right"
            >{`${BASE_URL}/${link.slug}`}</p>
            <div className="flex flex-row content-evenly">
              <AiOutlineCopy alt="copy again"/>
              <AiOutlineSend alt="visit site"/>
            </div>
          </div>
        )})
      }
    </div>
  )
}