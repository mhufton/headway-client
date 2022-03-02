import React from "react";

import { AiOutlineMenu } from 'react-icons/ai'

export default function NavBar() {
  const navItems = ["About", "Sign In", "Quotes"]
  const [open, setOpen] = React.useState(!true)
  console.log("open", open)

  const opener = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  return (
    <div>
      {open ?
        <div>
          <div className="flex flex-row justify-between">
            <h2 className="pl-2">FakeBrand</h2>
            <AiOutlineMenu onClick={opener}/>
          </div> 
          <div>
            <ul className="flex flex-col space-x-2 text-xl pt-1 justify-center text-color-white">
              {navItems.map((item, index) => {
                return <li className="list-none" key={index}>
                  <a href={`BASE_URL/{item}`}>
                    {item}
                  </a>
                </li>
              })}
            </ul>
          </div>
        </div>
      : 
      <div className="flex flex-row justify-between">
        <h2 className="pl-2">FakeBrand</h2>
        <AiOutlineMenu onClick={opener}/>
      </div>
      }
    </div>
  )

  // return (
  //   <div className="mb-2 mt-2">
  //     <ul className="flex flex-row space-x-2 text-xl pt-1 justify-center text-color-white">
  //       {navItems.map((item, index) => {
  //         return <li className="list-none" key={index}>
  //           <a href={`BASE_URL/{item}`}>
  //             {item}
  //           </a>
  //         </li>
  //       })}
  //       <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline shadow-md" >Get a quote</li>
  //     </ul>
  //   </div>
  // )
}