import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ADD_LINK, ADD_LINK_NO_SLUG, GET_LINKS } from '../utils/api'

export default function LinkCreator() {
  const [copySlug, setCopySlug] = useState("")
  const [urlData, setUrlData] = useState({
    url: '',
    slug: null
  })
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

  const changeHandler = (e) => {
    e.preventDefault();
    setUrlData({
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    createLink({ variables : { url: urlData.url, slug: urlData.slug } })
      .then(({data}) => setCopySlug(data.createLink.slug))
      .then(() => setUrlData({ url: "", slug: null }))
    setToCopy({ ...toCopy, copied: true})
  }

  return (
    <div className="bg-sky-800 mt-2 mb-2 py-7 flex flex-col">
      <form onSubmit={submitHandler} className="flex flex-row justify-center align-center">
        <label className="mx-2">
          <input 
            type="text"
            name="url"
            onChange={changeHandler}
            placeholder="URL here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 x-4"
          />
        </label>
        <label className="mx-2">
          <input 
            type="text"
            name="slug"
            onChange={changeHandler}
            placeholder="custom slug"
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