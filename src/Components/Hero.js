import React from "react";
import Dude from '../images/dude.png'

export default function Hero() {
  
  return (
    <div className="flex flex-row justify-center mx-5 my-1">
      <div className="flex flex-col max-width-12 gap-y-20 mr-20">
        <div>
          <h1 className="text-5xl font-bold">Your Brand On Your Links</h1>
          <p className="mt-5 x-1">FakeBrand is the industry-leading link management platform to brand, track and share short URLs using a custom domain name</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-5 rounded shadow-md  hover:scale-110 hover:shadow-lg">Sing Up For Free</button>
          <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 mx-5 my-5 rounded shadow-md  hover:scale-110 hover:shadow-lg">Sing Up For Free</button>
        </div>
      </div>

      <div className="ml-50">
        <img src={Dude} alt=""/>
      </div>
    </div>
  )
}