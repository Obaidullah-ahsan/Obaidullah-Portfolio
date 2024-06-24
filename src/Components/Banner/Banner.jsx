import React from "react";

const Banner = () => {
  return (
    <div className="max-w-3xl mx-4 md:mx-20 my-32">
      <h1 className="text-4xl font-bold text-white mb-6">
        Hello, I am Obaidullah
      </h1>
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8D61D5] to-[#19A8C7] inline-block text-transparent bg-clip-text">
        Front-end Developer
      </h1>
      <p className="mb-6">
        Passionate and detail-oriented Front-End Developer. Designing and
        implementing user-centric web applications. Expertise in HTML, CSS,
        JavaScript, and modern frameworks like React.
      </p>
      <button className="btn text-white rounded-full px-8 bg-gradient-to-r from-[#8D61D5] to-[#19A8C7]">
        Download CV
      </button>
    </div>
  );
};

export default Banner;
