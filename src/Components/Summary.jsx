import classNames from "classnames";
import { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { annotate, annotationGroup } from "rough-notation";

const Layout = ({ isRough, onComplete }) => {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  const [isLayoutDone, toggleLayout] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        animate();
      }, 2500);
    }
  }, [isVisible]);
  const animate = () => {
    const fs = {
      type: "box",
      iterations: 2,
      color: "#1e293b",
      animationDuration: 400,
    };
    const d1 = annotate(document.getElementById("dr-sm-text"), {
      ...fs,
      type: "box",
    });
    const line1 = annotate(document.getElementById("dr-sm-text-l-1"), {
      ...fs,
      color: "#5f82ba",
    });
    const line2 = annotate(document.getElementById("dr-sm-text-l-2"), {
      ...fs,
      color: "#5f82ba",
    });
    const line3 = annotate(document.getElementById("dr-sm-text-l-3"), {
      ...fs,
      color: "#5f82ba",
    });
    const line4 = annotate(document.getElementById("dr-sm-text-l-4"), {
      ...fs,
      color: "#5f82ba",
    });
    const lineg = annotationGroup([line1, line2, line3, line4]);
    // const d3 = annotate(document.getElementById("dr-sm-text-2"), {
    //   ...fs,
    //   type: "box",
    // });
    const ag = annotationGroup([d1, lineg]);
    ag.show();
    setTimeout(() => {
      toggleLayout(true);
      if (onComplete) {
        onComplete();
      }
    }, 700);
  };
  return (
    <div
      ref={ref}
      className={classNames("py-10", {
        "font-hand": isRough,
      })}
    >
      <div className="container mx-auto max-w-[900px] p-4 md:p-0">
        <h2 className="text-2xl font-semibold">
          <span
            id="dr-sm-text"
            className={classNames(
              "inline-flex opacity-0 transition-all duration-300",
              {
                "opacity-100": isLayoutDone,
              }
            )}
          >
            Summary
          </span>
        </h2>
        {isRough ? (
          <div className="flex flex-col gap-6 mt-6">
            <div id="dr-sm-text-l-1" className="h-2 w-[90%]"></div>
            <div id="dr-sm-text-l-2" className="h-2 w-[80%]"></div>
            <div id="dr-sm-text-l-3" className="h-2 w-[86%]"></div>
            <div id="dr-sm-text-l-4" className="h-2 w-[40%]"></div>
          </div>
        ) : (
          <p
            className={classNames(
              "mt-6 opacity-0 transition-all duration-300",
              {
                "font-semibold": isRough,
                "opacity-100": isLayoutDone,
              }
            )}
            id="dr-sm-text-2"
          >
            I specialize in rendering JSON data in an aesthetically pleasing
            manner on various platforms and frameworks, with a preference for
            JavaScript and React. With seven years of experience, my goal is to
            create applications and components that seamlessly handle data
            manipulation, even on resource-constrained devices, ensuring a
            smooth user experience. In essence, I am a frontend developer.
          </p>
        )}
      </div>
    </div>
  );
};

const Summary = () => {
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
          onComplete={() => {
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
        <Layout isRough={false} />
      </div>
      {/* <Layout isRough={false} /> */}
    </div>
  );
};

export default Summary;
