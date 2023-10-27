import classNames from "classnames";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { annotationGroup, annotate } from "rough-notation";
import Raman from "./../assets/raman-profile.jpg";

const Layout = ({ isRough }) => {
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
      iterations: 1,
      animationDuration: 300,
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
    const cta4 = annotate(document.getElementById("dr-hero-cta-3"), {
      ...defaultStyles,
      type: "circle",
      color: "#EF4444",
    });
    const ag = annotationGroup([d1, d2, d3, d4, cta1, cta2, cta3, cta4]);
    ag.show();
    setTimeout(() => {
      toggleDraw(true);
    }, 2000);
  };
  return (
    <div
      className={classNames("py-40", {
        "bg111-yellow-200": isRough,
        "bg111-blue-200": !isRough,
      })}
    >
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
              <p>Hi,</p>
            </div>
            <br />
            <div
              id="dr-hero-text-2"
              className={classNames(
                "text-4xl inline-flex px-4 transition-all duration-500 mt-6 delay-100",
                {
                  "opacity-100": isDrawDone,
                  "opacity-0": isRough,
                }
              )}
            >
              <p>{`I'm Raman Choudhary`}</p>
            </div>
            <p
              id="dr-hero-text-3"
              className={classNames(
                "text-xl inline-flex px-4 transition-all duration-500 mt-6 delay-300",
                {
                  "opacity-100": isDrawDone,
                  "opacity-0": isRough,
                }
              )}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam optio ad corporis assumenda ipsa iste molestiae porro!
              Cumque, culpa commodi!
            </p>
            <div className="flex gap-6">
              <button
                className={classNames(
                  "px-4 py-2 text-xl transition-all duration-500 mt-6 font-semibold text-blue-600",
                  {
                    "opacity-100": isDrawDone,
                    "opacity-0": isRough,
                  }
                )}
                id="dr-hero-cta-1"
              >
                Contact Me
              </button>
              <button
                className={classNames(
                  "px-4 py-2 text-xl transition-all duration-500 mt-6 font-semibold text-blue-600",
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
                  "px-4 py-2 text-xl transition-all duration-500 mt-6 font-semibold text-blue-600",
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
  return (
    <div className="relative">
      <Layout isRough={true} />
      {/* <Layout isRough={false} /> */}
    </div>
  );
};

export default Hero;
