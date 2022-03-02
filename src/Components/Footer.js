import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-sky-800 mt-10 py-3 flex flex-row justify-center">
      <div className="text-white text-left flex flex-row justify-start">
        <p className="mr-10">Terms & Conditions</p>
        <p className="mr-10">Privacy Policy</p>
        <p className="mr-10">Cookie Policy</p>
      </div>
      <div className="flex justify-end">
        <p className="text-white">Copyright 3030</p>
      </div>
    </div>
  )
}