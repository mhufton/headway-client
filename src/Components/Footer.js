import React from "react";

export default function Footer() {
  return (
    <div className="bg-sky-800 mt-10 py-3 flex flex-row place-content-evenly">
      <div className="text-white text-left flex">
        <p className="mr-10">Terms & Conditions</p>
        <p className="mr-10">Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div>
        <p className="text-white">Copyright 3030</p>
      </div>
    </div>
  )
}