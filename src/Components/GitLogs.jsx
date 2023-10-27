import { TypeAnimation } from "react-type-animation";

const CommitLogs = () => {
  return (
    <div className="commit-logs bg-gray-200 rounded-b-xl py-1 px-2 w-48 font-mono text-sm drop-shadow-md">
      <span>{`:/`}</span>
      <TypeAnimation
        speed={70}
        sequence={[
          "creating wireframe",
          "...",
          "making components",
          "running test",
          200,
          "Done",
        ]}
      />
    </div>
  );
};

export default CommitLogs;
