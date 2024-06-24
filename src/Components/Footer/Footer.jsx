import React from "react";
import { FaSquareGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-32 mb-10 space-y-2 md:space-y-0">
      <h4 className="bg-gradient-to-r from-[#8D61D5] to-[#19A8C7] inline-block text-transparent bg-clip-text">
        Feel free to contact me
      </h4>
      <p>abir60303@gmail.com</p>
      <div className="flex gap-4">
        <FaLinkedin size={22}/>
        <FaSquareGithub size={22}/>
        <FaFacebook size={22}/>
      </div>
    </div>
  );
};

export default Footer;
