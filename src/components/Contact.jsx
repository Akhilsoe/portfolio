import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/6f3e7f43-c91d-4ca6-afb9-2527ef92675f"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Contact
          </p>
          <p className="p-4">
            {" "}
            Submit the form below or shoot me an email - akhilbr10@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-2 p-2 bg-[#ccd6f6] text-black"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-2 bg-[#ccd6f6] p-2 text-black"
        />

        <textarea
          name="messege"
          className="bg-[#ccd6f6] p-2 mt-3 text-black"
          rows="9"
          placeholder="Messege"
        ></textarea>
        <button className="border-2 text-white hover:bg-pink-600 hover:border-pink-700 px-4 py-2 mt-4 mx-auto flex items-center ">
          Let's Collab
        </button>
      </form>
    </div>
  );
};

export default Contact;
