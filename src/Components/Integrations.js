import React from "react";
import Bar from "../images/bar.png"

export default function Integrations() {
  return (
    <div className="flex flex-col justify-center mt-20">
      <h4 className="text-xl font-bold flex justify-center">FakeBrand connects to the tools you already use</h4>
      <img src={Bar} alt="All of our integrations"/>
    </div>
  )
}