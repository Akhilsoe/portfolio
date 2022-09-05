import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import TAIL from "../assets/tailwind.png";
import REACTL from "../assets/react.png";
import FIRE from "../assets/firebase.png";
import GHUB from "../assets/github.png";
import JAVAS from "../assets/javascript.png";
import NODE from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold">
            Skills
          </p>
          <p className="mt-4">These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto " src={HTML} alt="html image" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={CSS} alt="CSS image" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={TAIL} alt="html" />
            <p className="my-4">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={REACTL} alt="html" />
            <p className="my-4">React JS</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={JAVAS} alt="html" />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20  mx-auto" src={GHUB} alt="html" />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NODE} alt="html" />
            <p className="my-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FIRE} alt="html" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
