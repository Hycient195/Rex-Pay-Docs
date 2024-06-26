"use client";

import { useState } from "react";

export default function HelpfullPage() {
  const [ selected, setSelected ] = useState({ yes: false, no: false });
  return (
    <div className="flex mt-20 mb-10 flex-row w-full justify-between items-center md:max-w-screen-sm flex-wrap gap-4">
      <p className="text-slate-800">Did you find this page helpful?</p>
      <ul className="flex flex-row items-center gap-3">
        <li className=""><button className="btn-black">Yes, I did</button></li>
        <li className=""><button className="btn-white">No, I did not</button></li>
      </ul>
      {
        selected.yes
        && (
          <div className="bg-green-200 animate-fade-in w-full text-center rounded-lg px-4 py-8 font-semibold text-slate-600">
            <p className="">Thank you for your feedback</p>
          </div>
        )
        
      }
      {
        selected.no
        && (
          <form className=" w-full">
            <h3 className="text-slate-700 text-lg font-semibold mb-1 tracking-wide">Comment</h3>
            <textarea name="" id="" cols={30} rows={7} className="w-full border border-slate-300 rounded-lg p-4 outline-none"></textarea>
            <button className="btn-black w-full mt-1">Submit</button>
          </form>
        )
      }
    </div>
  )
}