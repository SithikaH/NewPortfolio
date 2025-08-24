"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "This is a description of project one.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a description of project two.",
    image: "/images/project.png",
    tag: ["All", "mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a description of project three.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a description of project four.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project Five",
    description: "This is a description of project five.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project Six",
    description: "This is a description of project six.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initil: {y:50, opacity:0},
    animate: {y:0, opacity:1},

  };

  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"} 
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="web" 
        isSelected={tag === "web"} 
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="mobile" 
        isSelected={tag === "mobile"} 
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
          key={index}
           variants={cardVariants} 
           initial="initial" 
           animate={isInView ? "animate" : "initial"}
           transition={{duration: 0.3, delay: index *0.4}}
           >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


