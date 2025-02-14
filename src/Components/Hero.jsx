import classNames from "classnames";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { annotationGroup, annotate } from "rough-notation";
import Raman from "./../assets/raman-profile.jpg";
import CommitLogs from "./GitLogs";

const Layout = ({ isRough, onComplete }) => {
  const [isDrawDone, toggleDraw] = useState(false);
  useEffect(() => {
    if (isRough) {
      animate();
    }
  }, [isRough]);

  const animate = () => {
    const defaultStyles = {
      type: "box",
      color: "#1e293b",
      iterations: 2,
      animationDuration: 400,
    };
    const d1 = annotate(document.getElementById("dr-hero-img"), defaultStyles);
    const d2 = annotate(
      document.getElementById("dr-hero-text-1"),
      defaultStyles
    );
    const d3 = annotate(
      document.getElementById("dr-hero-text-2"),
      defaultStyles
    );
    const d4 = annotate(
      document.getElementById("dr-hero-text-3"),
      defaultStyles
    );
    const cta1 = annotate(
      document.getElementById("dr-hero-cta-1"),
      defaultStyles
    );
    const cta2 = annotate(
      document.getElementById("dr-hero-cta-2"),
      defaultStyles
    );
    const cta3 = annotate(
      document.getElementById("dr-hero-cta-3"),
      defaultStyles
    );

    const ag = annotationGroup([d1, d2, d3, d4, cta1, cta2, cta3]);
    ag.show();
    setTimeout(() => {
      toggleDraw(true);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 3000);
      }
    }, 4000);
  };
  return (
    <div
      className={classNames("py-10 md:pt-40", {
        "bg111-yellow-200": isRough,
        "bg111-blue-200": !isRough,
      })}
    >
      <CommitLogs />
      <div className="container mx-auto">
        <div className="flex gap-6 flex-col md:flex-row p-4 md:p-0 justify-center items-center">
          {isRough ? (
            <div
              className="w-40 h-40 flex justify-center items-center flex-col"
              id="dr-hero-img"
            >
              <div
                className="w-20 h-20 bg-red-500 rounded-full"
                id="dr-user-1"
              ></div>
              <div
                className="w-24 h-20 bg-slate-500 rounded-t-3xl"
                id="dr-user-2"
              ></div>
            </div>
          ) : (
            <div
              className="w-40 h-40 flex justify-center items-center flex-col"
              id="dr-hero-img"
            >
              <img src={Raman} alt="Raman" />
            </div>
          )}
          <div
            className={classNames("max-w-xl", {
              "font-hand": isRough,
              "font-main": !isRough,
            })}
          >
            <div
              id="dr-hero-text-1"
              className={classNames(
                "text-4xl inline-flex px-4 transition-all duration-500",
                {
                  "opacity-100": isDrawDone,
                  "opacity-0": isRough,
                }
              )}
            >
              <p className="font-semibold">Hi,</p>
            </div>
            <br />
            <div
              id="dr-hero-text-2"
              className={classNames(
                "text-4xl inline-flex px-4 transition-all duration-500 delay-100 mt-4",
                {
                  "opacity-100": isDrawDone,
                  "opacity-0 mt-6": isRough,
                }
              )}
            >
              <p className="font-semibold">{`I'm Khushbu Tameshwari`}</p>
            </div>
            <p
              id="dr-hero-text-3"
              className={classNames(
                "text-xl inline-flex px-4 transition-all duration-500 delay-300 mt-4",
                {
                  "opacity-100": isDrawDone,
                  "opacity-0": isRough,
                }
              )}
            >
              Full Stack Engineer with over 8 years of experience. Work
            </p>
            <div className="flex justify-between md:justify-start md:gap-4">
              <button
                className={classNames(
                  "text-sm  border-2 border-blue-500 px-4 py-2 transition-all duration-500 mt-6 font-semibold text-blue-600",
                  {
                    "opacity-100 mt-2": isDrawDone,
                    "opacity-50": isRough,
                  }
                )}
                id="dr-hero-cta-1"
              >
                Contact Me
              </button>
              <button
                className={classNames(
                  "text-sm border-2 border-blue-500 px-4 py-2 transition-all duration-500 mt-6 font-semibold text-blue-600",
                  {
                    "opacity-100": isDrawDone,
                    "opacity-0": isRough,
                  }
                )}
                id="dr-hero-cta-2"
              >
                Chat with AI
              </button>
              <button
                className={classNames(
                  "text-sm  border-2 border-blue-500 px-4 py-2 transition-all duration-500 mt-6 font-semibold text-blue-600",
                  {
                    "opacity-100": isDrawDone,
                    "opacity-0": isRough,
                  }
                )}
                id="dr-hero-cta-3"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isDone, toggleIsDone] = useState(false);
  return (
    <div className="relative">
      <div
        className={classNames("transition-all duration-1000 clip-test", {
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

export default Hero;
