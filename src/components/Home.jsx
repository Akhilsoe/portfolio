import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
          AKHIL B R
        </h1>
        <h2 className="text-4xl md:text-7xl font bold text-[#8892b0]">
          I'm a front end web developer.{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in creating visually aesthetic web pages to provide
          exceptional digital experience. I mostly work on React to build
          responsive, single page web applications.
        </p>
        <div>
          <button className="text-white border-2 px-4 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-700">
            <Link to="work" smooth={true} duration={500}>
              View Works
            </Link>
            <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
