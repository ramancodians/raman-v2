import classNames from "classnames";
import { useEffect, useState } from "react";
import { annotate, annotationGroup } from "rough-notation";
import Job from "./Job";
import { useInView } from "react-hook-inview";

const SECTIONSDATA = [
  {
    id: "leena-ai",
    company: "Leena.AI",
    start: "Sep 2022",
    end: "May 2023",
    title: "Lead Frontend Engineer",
    body: () => (
      <div>
        <ul className="list-disc">
          <li>
            Developed critical user-facing modules to enhance user management of
            dynamic workflows with React DnD in Typescript.
          </li>
          <li>
            Took full ownership of creating custom UI components with MUI
            Library in Storybook.
          </li>
          <li>
            Designed Dynamic tables to data validation and enhance error
            handling capabilities.
          </li>
          <li>
            Collaborated closely with a large team of 35+ engineers, promoting
            efficient teamwork.
          </li>
          <li>
            Contributed significantly to process enhancements and CI/CD pipeline
            improvements using Github Actions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "radius-agent",
    company: "Radius Agent",
    start: "Sep 2018",
    end: "May 2022",
    title: "Lead Frontend Engineer",
    body: () => (
      <div>
        <ul className="list-disc">
          <li>Led a team of 3 frontend engineers at Radius.</li>
          <li>
            Owned the end-to-end release and deployment cycle for the web
            platform.
          </li>
          <li>
            Led the multiple core modules at Radius. Some of the highlights are
            performance drive, agent-to-agent video conference, Deployment Cycle
            with Zero down time and tests.
          </li>
          <li>
            Architected the frontend stack from Angular codebase to a custom
            Server Side Rendered Application with React and Express, integrating
            four codebases for enhanced code reusability and development
            efficiency.
          </li>
          <li>
            Implemented Unit Testing and Continuous Integration practices using
            Jest.
          </li>
          <li>
            Achieved a significant reduction in script/resource size from 6MB to
            approximately 800KB through techniques such as code splitting, Lazy
            Loading, and service workers.
          </li>
          <li>
            Collaborated closely with leadership to enhance web platform
            conversions by utilizing analytics and data-driven decision making.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "goomo",
    company: "Goomo",
    start: "May 2017",
    end: "Sep 2018",
    title: "Frontend Engineer (SD2)",
    body: () => (
      <div>
        <p>
          Development critical user-facing modules enabling users to efficiently
          manage dynamic workflows. Took full responsibility of developing
          featurerich UI components using the MUI Library in Storybook,
          including dynamic tables that facilitated data validations and
          advanced error handling.
        </p>
        <p>
          Collaborated with a diverse team of over 35 engineers, fostering
          effective teamwork and contributing to numerous process improvements
          and CI/CD pipelines.
        </p>
      </div>
    ),
  },
];

const Layout = ({ isRough }) => {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (isVisible) {
      animate();
    }
  }, [isVisible]);
  const animate = () => {
    console.log("start  exp");
    const fs = {
      iterations: 1,
      color: "#1e293b",
      animationDuration: 400,
    };
    const d1 = annotate(document.getElementById("dr-ex-text"), {
      ...fs,
      type: "box",
    });
    const l1 = annotate(document.getElementById("dr-ex-line"), {
      ...fs,
      type: "underline",
    });
    const ag = annotationGroup([d1, l1]);
    ag.show();
  };
  return (
    <div ref={ref}>
      <div className="container mx-auto max-w-[900px]">
        <div className="text-2xl font-semibold">
          <span id="dr-ex-text">Experience</span>
        </div>
        <div id="dr-ex-line" className="h-6"></div>
        <div className="flex flex-col gap-10">
          {SECTIONSDATA.map((sec, i) => (
            <Job
              isRough={isRough}
              index={i}
              name={sec.id}
              key={sec.id}
              data={sec}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="p-4 md:p-0">
      <Layout isRough={true} />
    </div>
  );
};

export default Experience;
