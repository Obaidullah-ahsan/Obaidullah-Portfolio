"use client";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
const Projects = () => {
  const projectItem = [
    {
      image: "https://i.ibb.co/tznPF5S/Screenshot-306.jpg",
      title: "Tourism Management Website",
      description:
        "Trip Trackers helps you discover, plan, and remember your travel adventures.",
      liveLink: "https://b9a10-triptrackers-website.web.app/",
      githubLink: "https://github.com/Obaidullah-ahsan/Trip-Trackers-Client",
    },
    {
      image: "https://i.ibb.co/PxSGcXc/Screenshot-307.jpg",
      title: "Online Group-Study Assignment",
      description:
        "Study Sync is a web application designed to facilitate online group-study assignments.",
      liveLink: "https://study-sync-97408.web.app/",
      githubLink: "https://github.com/Obaidullah-ahsan/Study-Sync-Client",
    },
  ];
  return (
    <div className="mx-4 md:mx-20 mb-20" id="Projects">
      <div>
        <h2 className="text-2xl text-white font-semibold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        {projectItem.map((item, idx) => (
          <ProjectCard key={idx} item={item}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
