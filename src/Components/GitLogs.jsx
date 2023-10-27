import classNames from "classnames";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const CommitLogs = () => {
  const [isDone, toggleIsDone] = useState(false);
  const [isHide, toggleHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleIsDone(true);
    }, 6000);

    setTimeout(() => {
      toggleHide(true);
    }, 8000);
  }, []);
  return (
    <div
      className={classNames(
        "commit-logs bg-gray-200 rounded-b-xl py-1 px-2 w-48 font-mono text-sm drop-shadow-md transition-all duration-300",
        {
          "bg-green-500 text-white": isDone,
          "opacity-0": isHide,
        }
      )}
    >
      <span>{`:/`}</span>
      <TypeAnimation
        speed={40}
        sequence={[
          "creating wireframe",
          300,
          "making components",
          400,
          "running test",
          200,
          "Done",
        ]}
      />
    </div>
  );
};

export default CommitLogs;
