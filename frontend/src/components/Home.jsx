import React from "react";
import { FaFileWord } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40">
        <div className="flex h-screen items-center justify-center">
          <div className="border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">
              Convert Word to PDF Online
            </h1>
            <p className="text-sm text-center mb-5">
              Easily convert your word file to PDF without installing any
              external software
            </p>
            <div className="flex flex-col items-center space-y-4">
            <input
              type="file"
              accept=".doc, .docx"
              className="hidden"
              id="FileInput"
            />
            <label
              htmlFor="FileInput"
              className="w-full flex items-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 hover:text-white"
            >
                <FaFileWord className="text-3xl mr-3"/>
                <span className="text-3xl mr-2 ">Choose File</span>
            </label>
            <button className="text-white bg-blue-500 hover:bg-blue-700 duration-300 font-bold px-4 py-2 rounded-md">Convert File</button>
          </div>
          </div>
    
        </div>
      </div>
    </>
  );
}

export default Home;
