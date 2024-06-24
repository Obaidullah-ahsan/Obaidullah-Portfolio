"use client";
import React from "react";

const ProjectCard = ({ item }) => {
  const { image, title, description, liveLink, githubLink } = item;
  return (
    <div>
      <div className="max-w-lg p-6 border rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt=""
          className="object-fill object-center w-full rounded-md h-48 md:h-64 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl text-white font-semibold tracking-wide">
            {title}
          </h2>
        </div>
        <p className="dark:text-gray-800">{description}</p>
        <div className="flex justify-between mt-6">
          <button className="btn text-white rounded-full px-8 bg-gradient-to-r from-[#8D61D5] to-[#19A8C7]">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="btn btn-outline text-white rounded-full px-8">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Check on Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
