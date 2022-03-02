import React from "react";
import Dude from '../images/dude.png'

export default function Hero() {
  
  return (
    <div className="flex flex-row grid-rows-2">
      <div className="grid-rows-2">
        <div className="x-1">
          <h1 className="text-3xl font-bold">Your Brand On Your Links</h1>
          <p className="mt-5 break-normal">FakeBrand is the industry-leading link management platform to brand, track and share short URLs using a custom domain name</p>
        </div>
        <div>
          <h3>Join our mailing list!</h3>
          <form flex>
            <input  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-xs mr-2 mt-10"
              type="text"
              placeholder="your email"
            />
            <button class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">I'm in!</button>
          </form>
        </div>
      </div>
      <div className="pl-50">
        <img src={Dude} alt=""/>
      </div>
    </div>
  )
}