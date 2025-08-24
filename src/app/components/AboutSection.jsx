"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import LogoLoop from "./LogoLoop";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiJavascript, SiHtml5, SiCss3,
  SiPython, SiDjango, SiMongodb, SiMysql,
  SiPostgresql, SiGit, SiGithub
} from "react-icons/si";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Undergraduate of Bachelor of Computer Science in University of Kelaniya</li>
        <li>GCE Advanced Level in Royal College, Colombo 07</li>
        <li>GCE Ordinary Level in Asoka Vidyalaya, Colombo 10</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Design for Beginnners</li>
        <li>Python for Beginnners</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/sithika.jpeg" width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            className="text-4xl font-bold mb-4 shiny-text"
            style={{ "--duration": "3s" }}
          >
            About Me
          </h2>

          <p className="text-base lg:text-lg">
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. My journey in web
            development has been fueled by a love for coding and a desire to
            build user-friendly interfaces.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>

      {/* ✅ LogoLoop section starts here */}
      <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={[
            { node: <SiReact />, title: "React", href: "https://react.dev" },
            { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
            { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
            { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
            { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
            { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
            { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { node: <SiPython />, title: "Python", href: "https://www.python.org" },
            { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
            { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
            { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
            { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
            { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
            { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
            ]}

          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      {/* ✅ LogoLoop section ends here */}
    </section>
  );
};

export default AboutSection;
