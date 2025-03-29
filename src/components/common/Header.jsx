import React from "react";
import Consumer from "./Consumer";

export default function Header() {
  return (
    <div className=" bg-amber-100 flex items-center justify-around border h-28 text-gray-700 font-medium">
      <div className=" flex items-center w-6/12">
        <h1 className=" text-4xl mr-5">BREW</h1>
        <ul className=" flex justify-around items-center gap-8">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex justify-end w-6/12">
        <Consumer />
      </div>
    </div>
  );
}
