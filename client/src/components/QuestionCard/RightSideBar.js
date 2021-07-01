const RightSideBar = () => {
  return (
    <div className="bg-white w-80 ml-8 h-1/3 rounded shadow-md border border-gray-300">
      <span
        className="block pl-4 py-2 text-left  mb-4 text-gray-600 bg-gray-100 border-b-2 border-gray-200 bg-opacity-60"
        style={{ backgroundColor: "#FAFAFB" }}
      >
        Step 1: Draft your question
      </span>
      <span className="text-xs block pl-4 pb-4 text-left">
        The community is here to help you with specific coding, algorithm, or
        language problems.
      </span>
      <span className="text-xs block pl-4 pb-4 text-left">
        Avoid asking opinion-based questions.
      </span>
      <div className="flex pl-4 pb-2.5 mb-2 text-sm border-b border-gray-300 font-semibold">
        <img
          className="mr-4"
          src="https://cdn.sstatic.net/Img/list-1.svg?v=e8dd475ba207"
          width="16"
          height="14"
          alt="1."
        />
        Summarize the problem
      </div>
      <div className="flex pl-4 pb-2.5 mb-2 text-sm border-b border-gray-300 font-semibold">
        <img
          className="mr-4"
          src="https://cdn.sstatic.net/Img/list-2.svg?v=9382fc2c3631"
          width="16"
          height="14"
          alt="2."
        />
        Describe what you've tried
      </div>
      <div className="flex pl-4 pb-2.5 text-sm font-semibold">
        <img
          className="mr-4"
          src="https://cdn.sstatic.net/Img/list-3.svg?v=323a95564232"
          width="18"
          height="10"
          alt="3."
        />
        Show some code
      </div>
    </div>
  );
};

export default RightSideBar;
