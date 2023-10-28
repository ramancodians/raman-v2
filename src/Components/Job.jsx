import { useState, useEffect, useMemo, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";
import classNames from "classnames";
import { useInView } from "react-hook-inview";
import { getNumberOfLines, mockLines } from "../utils";

const RoughJobDesc = ({ name, delay, isLayoutDone, noOfLines }) => {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (noOfLines) {
      animate(true);
    }
  }, [isVisible, isLayoutDone]);

  const animate = (show = true) => {
    const fs = {
      type: "box",
      iterations: 2,
      color: "#adbedb",
      animationDuration: 100,
    };
    const allLines = document.querySelectorAll(`.dr-job-${name}-line`);
    const ag = annotationGroup(
      Array.from(allLines).map((x) => annotate(x, { ...fs }))
    );
    if (show) {
      ag.show();
    } else {
      ag.hide();
    }
  };
  return (
    <div ref={ref} className="flex flex-col gap-6 w-full">
      {mockLines
        .slice(0, noOfLines - 3)
        .concat([40])
        .map((x, i) => (
          <div
            key={i}
            className={`dr-job-${name}-line h-2`}
            style={{ width: `${x}%` }}
          ></div>
        ))}
    </div>
  );
};

const Layout = ({ isRough, name, data, onComplete }) => {
  const jobDescRef = useRef();
  const [ref, isVisible] = useInView({
    threshold: 0.8,
  });
  const [noOfLines, setNoOfLines] = useState(null);
  const [isLayoutDone, toggleLayout] = useState(false);
  useEffect(() => {
    if (isVisible) {
      animate();
    }
  }, [isVisible, isRough]);

  const animate = () => {
    const fs = {
      type: "box",
      iterations: 2,
      color: "#1e293b",
      animationDuration: 400,
    };
    const d0 = annotate(document.getElementById(`dr-section-${name}-box`), {
      ...fs,
      color: "#3fcec2",
    });
    const d1 = annotate(document.getElementById(`dr-section-${name}-company`), {
      ...fs,
    });
    const d2 = annotate(document.getElementById(`dr-section-${name}-title`), {
      ...fs,
    });
    const d3 = annotate(document.getElementById(`dr-section-${name}-time`), {
      ...fs,
    });
    const ag = annotationGroup([d0, d1, d2, d3]);
    ag.show();
    setTimeout(() => {
      toggleLayout(true);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 1000);
  };

  useEffect(() => {
    if (jobDescRef.current) {
      setNoOfLines(getNumberOfLines(jobDescRef.current));
    }
  }, [jobDescRef.current]);
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col gap-4 p-4", {
        "font-main": !isRough,
        "font-hand": isRough,
      })}
      id={`dr-section-${name}-box`}
    >
      <div className="flex flex-col md:flex-row justify-between py-6">
        <div className="flex flex-col justify-start items-start">
          <h2
            className={classNames(
              "text-xl md:text-2xl font-semibold text-blue-600 inline transition-all duration-300",
              {
                "opacity-0": isRough,
              }
            )}
            id={`dr-section-${name}-company`}
          >
            {data.company}
          </h2>
          <p
            className={classNames(
              "text-md font-semibold text-blue-600 inline transition-all duration-300 mt-2",
              {
                "opacity-0": isRough,
              }
            )}
            id={`dr-section-${name}-title`}
          >
            {data.title}
          </p>
        </div>
        <div>
          <p
            className={classNames(
              "text-sm font-semibold text-blue-600 inline transition-all duration-300",
              {
                "opacity-0": isRough,
              }
            )}
            id={`dr-section-${name}-time`}
          >{`${data.start} - ${data.end}`}</p>
        </div>
      </div>
      <div className="relative">
        {isRough && (
          <div className="absolute w-full h-full left-0 top-0 transition-all">
            <RoughJobDesc
              name={name}
              isLayoutDone={isLayoutDone}
              noOfLines={noOfLines}
            />
          </div>
        )}
        <div
          className={classNames({
            "opacity-0": isRough,
          })}
          ref={jobDescRef}
        >
          {data.body()}
        </div>
      </div>
    </div>
  );
};

const Job = ({ name, data }) => {
  const [isDone, toggleIsDone] = useState(false);
  return (
    <div className="relative">
      <div
        className={classNames("transition-all duration-1000", {
          "opacity-0": isDone,
        })}
      >
        <Layout
          isRough={true}
          name={name}
          data={data}
          onComplete={() => {
            console.log("Job Done:", name);
            toggleIsDone(true);
          }}
        />
      </div>
      <div
        className={classNames(
          "absolute w-full h-full left-0 top-0 transition-all duration-1000 opacity-0",
          {
            "opacity-100": isDone,
          }
        )}
      >
        <Layout name={name} data={data} isRough={false} />
      </div>
      {/* <Layout isRough={false} /> */}
    </div>
  );
};

export default Job;
