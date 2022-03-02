import React from "react";

export default function NavBar() {
  const navItems = ["Home", "About", "Sign In"]

  return (
    <div className="mb-8 pb-2">
      <ul className="flex flex-row space-x-20 text-xl pt-1 justify-center text-color-white">
        {navItems.map(item => {
          return <li class="list-none">
            <a href={`BASE_URL/{item}`}>
              {item}
            </a>
          </li>
        })}
        <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" >Get a quote</li>
      </ul>
    </div>
  )
}