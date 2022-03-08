import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ADD_LINK, ADD_LINK_NO_SLUG, GET_LINKS } from '../utils/api'

export default function LinkCreator() {
  // let [newSlug, setNewSlug] = useState("");
  const [copySlug, setCopySlug] = useState("")
  let newUrl, newSlug;

  // state for the clipboard
  const [toCopy, setToCopy] = useState({
    value: '',
    copied: false
  });

  const BASE_URL = 'http://localhost:4000/'
  const urlToCopy = BASE_URL + copySlug;

  const [createLink] = useMutation
    (ADD_LINK,
      {
        refetchQueries: [
          { query: GET_LINKS }
        ]
      }
    );

  const submitHandler = (e) => {
    e.preventDefault();
    // if (newSlug !== "") {
    //   createLink({ variables : { url: newUrl.value , slug: newSlug.value } })
    //     .then(({data}) => setCopySlug(data.createLink.slug))
    //   // setNewSlug("")
    //   setToCopy({ ...toCopy, copied: true}, 5000)
    // }
    // if (!newSlug && newUrl !== "") {
    //   createLinkNoSlug({ variables: { url: newUrl.value }})
    //     .then(({data}) => setNewSlug(data.createLink.slug))
    //   setToCopy({ value: urlToCopy, copied: true})
    // }
    createLink({ variables : { url: newUrl.value, slug: newSlug.value } })
      .then(({data}) => setCopySlug(data.createLink.slug));
    setToCopy({ ...toCopy, copied: true})
  }

  return (
    <div className="bg-sky-800 mt-2 mb-2 py-7 flex flex-col">
      <form onSubmit={submitHandler} className="flex flex-row justify-center align-center">
        <label className="mx-2">
          <input 
            type="text"
            ref={value => newUrl = value}
            placeholder="URL here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 x-4"
          />
        </label>
        <label className="mx-2">
          <input 
            type="text"
            ref={value => newSlug = value}
            placeholder="custom slug"
            // onChange={({ target }) => setNewSlug(target.value)}
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
            <CopyToClipboard text={`${urlToCopy}`}>
              <button className="bg-green-400 hover:bg-green-700 hover:scale-110 text-white font-bold rounded shadow-md mt-3 py-2 px-10">Copy New URL</button>
            </CopyToClipboard>
            : null
          }
      </div>
    </div>
  )
}