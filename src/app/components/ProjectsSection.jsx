"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ShinyText from "./ShinyText";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal Portfolio website to showcase my projects and skills which is built using Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "NeuroLabs",
    description: "This is an interactive GUI application for building, training and evaluating ML models which was done by as a group",
    image: "/images/GUI_APP.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Designer Portfolio",
    description: "This is a portfolio related to my graphic designing work. ",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "HR Managemnent System",
    description: "This is a description of project four.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Social Medai App",
    description: "This is a description of project five.",
    image: "/images/project.png",
    tag: ["All", "web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "To Do List App",
    description: "This is a description of project six.",
    image: "/images/project.png",
    tag: ["All", "mobile"],
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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full">
      {/* Centered Shiny Heading */}
      <div className="flex justify-center items-center w-full">
        <ShinyText
          text="My Projects"
          disabled={false}
          speed={3}
          className="text-5xl font-bold mt-4 mb-8 md:mb-12"
        />
      </div>

      {/* Tags */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      {/* Cards */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
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
