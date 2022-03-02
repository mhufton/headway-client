import React from "react";

export default function NavBar() {
  const navItems = ["FakeBrand", "About", "Sign In"]
  const rightNav = ["Sign Up", "Log In"]

  return (
    <div className="my-3 flex flex-row place-content-evenly">
      <ul className="flex flex-row space-x-10 text-sm pt-1 justify-center text-color-white">
        {navItems.map((item, index) => {
          return <li className="list-none" key={index}>
            <a href={`BASE_URL/{item}`}>
              {item}
            </a>
          </li>
        })}
      </ul>
      <ul className="flex flex-row space-x-10 text-sm pt-1 justify-center text-color-white">
{rightNav.map((item, index) => {
  return <li className="list-none" key={index}>
    <a href={`BASE_URL/{item}`}>
      {item}
    </a>
  </li>
  
})}
<li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline shadow-md">Get a quote</li>
</ul>
    </div>
  )
}

