import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ADD_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`

const ADD_LINK_NO_SLUG = gql`
  mutation CreateLink($url: String!) {
    createLink(url: $url) {
      url
      slug
    }
  }
`

export default function LinkCreator() {
  let [newSlug, setNewSlug] = useState("");
  let newUrl, slug;

  // state for the clipboard
  const [toCopy, setToCopy] = useState({
    value: '',
    copied: true
  });
  console.log("toCopyState", toCopy)

  const [createLink, {errorSlug}] = useMutation(ADD_LINK);
  const [createLinkNoSlug, {error}] = useMutation(ADD_LINK_NO_SLUG);
  if (error) return `Submission error! ${error.message}`;
  if (errorSlug) return `Submission error! ${error.message}`;
  console.log("newUrl", newUrl)

  const submitHandler = (e) => {
    e.preventDefault();
    if (newSlug !== "") {
      createLink({ variables : { url: newUrl.value , slug: newSlug.value } })
      setNewSlug("")
      setToCopy({ ...toCopy, copied: true}, 5000)
    }
    if (!newSlug && newUrl !== "") {
      createLinkNoSlug({ variables: { url: newUrl.value }})
      setNewSlug("");
      setToCopy({ ...toCopy, copied: true})
    }
  }

  // onSubmit do two things
  // 1) POST the mutated, new url
  // 2) setToCopy({ value: newUrl, copied: true }) 
  // when toCopy is true populate button with copyToClipboard functionaility

  return (
    <div className="bg-sky-800 mt-2 mb-2 py-7 flex flex-col">
      <form onSubmit={submitHandler} className="flex flex-row justify-center align-center">
        <label className="mx-2">
          {/* <p className="text-white">Enter the URL you wish to shrink</p> */}
          <input 
            type="text"
            ref={value => newUrl = value}
            placeholder="URL here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 x-4"
          ></input>
        </label>
        <label className="mx-2">
          {/* <p className="text-white">Create a custom short code</p> */}
          <input 
            type="text"
            ref={value => newSlug = value}
            placeholder="custom slug"
            onChange={({ target }) => setNewSlug(target.value)}
            minLength="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2"
          />
        </label>
        <button 
          className="bg-green-400 hover:bg-green-700 text-white font-bold px-2 ml-2 rounded shadow-md hover:scale-110"
          type="submit">Shorten!</button>
      </form>
      <div className="flex justify-center">
        {toCopy.copied ? 
            <button className="bg-green-400 hover:bg-green-700 hover:scale-110 text-white font-bold rounded shadow-md mt-3 py-2 px-10">Copy New URL</button>
            : null
          }
      </div>
    </div>
  )
}