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
  {
    id: "radius-agent",
    company: "Radius Agent",
    start: "Sep 2018",
    end: "May 2022",
    title: "Lead Frontend Engineer",
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
  {
    id: "radius-agent-1",
    company: "Radius Agent",
    start: "Sep 2018",
    end: "May 2022",
    title: "Lead Frontend Engineer",
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
    <div
      ref={ref}
      className={classNames("py-10", {
        "font-hand": isRough,
      })}
    >
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
              delay={(i + 1) * 1000 + 1000}
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
