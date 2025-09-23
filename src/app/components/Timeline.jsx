"use client";
import React, { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";

const timelineData = [
  {
    id: 1,
    tag: "Tagline",
    heading: "Co-Director of Digital Media Avenue 2025-26",
    subHeading: "Team Leader - Sports & Recreational Activities Avenue 2024-25",
    text: "Rotaract Club of University of Kelaniya",
  },
  {
    id: 2,
    tag: "Tagline",
    heading: "Public Visibility Lead - 2024",
    text: "IEEE Computer Science Society, University of Kelaniya",
  },
  {
    id: 3,
    tag: "Tagline",
    heading:
      "B.Sc. (Hons) in Computer Science Undergraduate in University of Kelaniya",
    subHeading: "from 2023",
  },
  {
    id: 4,
    tag: "Tagline",
    heading: "Completed G.C.E. A/Ls in Physical Science Stream",
    subHeading: "Royal College, Colombo 07",
  },
];

// ✅ Config for toggles
const config = {
  showId: false,
  showTag: false,
  showButton: false,
  showSubHeading: true,
};

export default function Timeline() {
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const [visible, setVisible] = useState(
    () => new Array(timelineData.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = itemRefs.current.indexOf(entry.target);
          if (idx !== -1) {
            setVisible((prev) => {
              const copy = [...prev];
              copy[idx] = entry.isIntersecting;
              return copy;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const setRef = (el, i) => {
    itemRefs.current[i] = el;
  };

  return (
    <section className="timeline-wrapper">
      {/* ✅ Shiny Heading */}
      <div className="flex justify-center items-center w-full">
        <ShinyText
          text="Timeline"
          disabled={false}
          speed={3}
          className="text-5xl font-bold mb-8"
        />
      </div>

      <div className="timeline-container">
        {timelineData.map((item, index) => {
          const sideClass = index % 2 === 0 ? "left" : "right";
          const inViewClass = visible[index] ? "inView" : "";
          return (
            <div
              key={item.id}
              ref={(el) => setRef(el, index)}
              className={`timeline-item ${sideClass} ${inViewClass}`}
            >
              <div className="inner glass-tile">
                {config.showId && (
                  <span className="number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                )}

                <div className="content">
                  {config.showTag && <div className="tag">{item.tag}</div>}

                  <h3 className="heading font-bold">{item.heading}</h3>

                  {config.showSubHeading && item.subHeading && (
                    <h4 className="sub-heading">{item.subHeading}</h4>
                  )}

                  {item.text && <p className="text">{item.text}</p>}

                  {config.showButton && (
                    <button className="btn">Change variant</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
