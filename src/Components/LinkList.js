import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_LINKS = gql`
  query Links{
    links {
      url
      slug
    }
  }
`

export default function LinkList() {
  const { loading, error, data } = useQuery(GET_LINKS);

  console.log("Links", {data})
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className="flex flex-col bg-gray-100">
      {
        data.links.map((link, index) => {
          return <p 
            key={index}
            className="justify-center align-center"
          >
            {link.url} --- {link.slug}
          </p>
        })
      }
    </div>
  )
}