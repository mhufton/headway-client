import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function LinkCreator() {
  const [url, setUrl] = useState()
  const [slug, setSlug] = useState();

  // state for the clipboard
  const [toCopy, setToCopy] = useState({
    value: '',
    copied: false
  });

  // onSubmit do two things
  // 1) POST the mutated, new url
  // 2) setToCopy({ value: newUrl, copied: true }) 
  // when toCopy is true populate button with copyToClipboard functionaility

  return (
    <div className="bg-gray-100">
      <form className="x-4">
        <input 
          type="text"
          placeholder="your URL"
          onChange={(e) => setUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 mt-5"

        />
        <input 
          type="text"
          placeholder="custom slug"
          onChange={(e) => setSlug(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 mt-5"

        />
        <button 
          class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit">Shorten</button>
      </form>
      {/* 
        {toCopy ? 
          <button onClick{() => stuff()}>Copy Me</button>
          : null
        }
      */}
    </div>
  )
}