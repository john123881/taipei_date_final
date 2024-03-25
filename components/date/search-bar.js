import React from "react";
import { IoSearchCircle } from "react-icons/io5";

export default function SearchBar() {
  return (
    <>
      <div className="p-8 flex justify-center md:justify-center">
        <label className="flex items-center">
          <input
            className="rounded-full border-2 border-green-500 px-4 py-1 h-8 mr-2 w-140 md:w-160"
            placeholder="Search..."
          />
          <IoSearchCircle className="text-green-500 w-8 h-8 md:w-8 md:h-8" />
        </label>
      </div>
    </>
  );
}
