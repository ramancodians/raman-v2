import { useState, useEffect, useMemo } from "react";
import { annotate, annotationGroup } from "rough-notation";
import classNames from "classnames";
import { useInView } from "react-hook-inview";

const RoughJobDesc = ({ name, delay }) => {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  const lines = useMemo(() => {
    return Array(5)
      .fill(1)
      .map((x, i) => i);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        animate(true);
      }, delay);
    } else {
      animate(false);
    }
  }, [isVisible]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     animate();
  //   }, delay);
  // }, []);

  const animate = (show = true) => {
    const fs = {
      type: "box",
      iterations: 2,
      color: "#adbedb",
      animationDuration: 400,
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
      {[89, 79, 88, 76, 70, 30].map((x) => (
        <div
          key={x}
          className={`dr-job-${name}-line h-2`}
          style={{ width: `${x}%` }}
        ></div>
      ))}
    </div>
  );
};

const Job = ({ isRough, name, data }) => {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  const [isLayoutDone, toggleLayout] = useState(false);
  useEffect(() => {
    if (isVisible && !isLayoutDone) {
      animate();
    }
  }, [isVisible]);

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
    }, 2000);
  };
  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 p-4"
      id={`dr-section-${name}-box`}
    >
      <div className="flex flex-col md:flex-row justify-between py-6">
        <div className="flex flex-col">
          <h2
            className={classNames(
              "text-2xl font-semibold text-blue-600 inline opacity-0 transition-all duration-300",
              {
                "opacity-100": isLayoutDone,
                "h-2": isRough,
              }
            )}
            id={`dr-section-${name}-company`}
          >
            {data.company}
          </h2>
          <p
            className={classNames(
              "text-xl font-semibold text-blue-600 inline opacity-0 transition-all duration-300 mt-4",
              {
                "opacity-100": isLayoutDone,
                "h-2": isRough,
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
              "text-xl font-semibold text-blue-600 inline opacity-0 transition-all duration-300",
              {
                "opacity-100": isLayoutDone,
                "h-2": isRough,
              }
            )}
            id={`dr-section-${name}-time`}
          >{`${data.start} - ${data.end}`}</p>
        </div>
      </div>
      <div>{isRough ? <RoughJobDesc name={name} /> : <>{data.body()}</>}</div>
    </div>
  );
};

export default Job;
