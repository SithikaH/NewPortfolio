"use client";
import React, { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";

// ⚡ CN helper function
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const timelineData = [
  {
    id: "1",
    heading: "Co-Director of Digital Media Avenue 2025-26",
    subHeading: "Team Leader - Sports & Recreational Activities Avenue 2024-25",
    text: "Rotaract Club of University of Kelaniya",
  },
  {
    id: "2",
    heading: "Public Visibility Lead - 2024",
    text: "IEEE Computer Science Society, University of Kelaniya",
  },
  {
    id: "3",
    heading:
      "B.Sc. (Hons) in Computer Science Undergraduate in University of Kelaniya",
    subHeading: "from 2023",
  },
  {
    id: "4",
    heading: "Completed G.C.E. A/Ls in Physical Science Stream",
    subHeading: "Royal College, Colombo 07",
  },
];

export default function TimelineNew() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (id) {
            setVisibleItems((prev) => {
              const updated = new Set(prev);
              if (entry.isIntersecting) {
                updated.add(id);
              } else {
                updated.delete(id);
              }
              return updated;
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

  const setItemRef = (id, element) => {
    if (element) {
      itemRefs.current.set(id, element);
    } else {
      itemRefs.current.delete(id);
    }
  };

  return (
    <section className="timeline-wrapper">
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
          const inViewClass = visibleItems.has(item.id) ? "inView" : "";

          return (
            <div
              key={item.id}
              data-id={item.id}
              ref={(el) => setItemRef(item.id, el)}
              className={cn("timeline-item", sideClass, inViewClass)}
            >
              <div className="inner glass-tile">
                <div className="content">
                  <h3 className="heading font-bold">{item.heading}</h3>
                  {item.subHeading && (
                    <h4 className="sub-heading">{item.subHeading}</h4>
                  )}
                  {item.text && <p className="text">{item.text}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
