import React from "react";
import workimg from "../assets/workone.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="my-4">Check out some of my recent works!</p>
        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${workimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://hitflix-in.vercel.app/">
                  <button className="text-center rounded-lg py-2 px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Akhilsoe/netflix-clone/archive/refs/heads/master.zip">
                  <button className="text-center rounded-lg py-2 px-4 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
