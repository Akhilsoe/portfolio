import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="inline text-4xl border-b-4 font-bold border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">Hi I'm Akhil B R</p>
          </div>
          <div>
            <p>
              I like to design stuff and change button colors. I also mess
              around with alignments and stuff from different web pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
