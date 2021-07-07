import React from "react";
import Question from "../../assets/svg/Question";
import Trophy from "../../assets/svg/Trophy";
import Upvotes from "../../assets/svg/Upvotes";
import Bookmark from "../../assets/svg/Bookmark";

const Intro = () => {
  return (
    <div className="w-1/3 p-10">
      <div className="text-left font-medium text-2xl mb-5">
        Join the Stack Overflow community
      </div>
      <div className="flex text-md text-left mb-3">
        <Question />
        <span className="ml-5">Get unstuck -- ask a question</span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Upvotes />
        <span className="ml-5">
          Unlock new privileges like voting and commenting
        </span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Bookmark />
        <span className="ml-5">Save your favorite tags, filters, and jobs</span>
      </div>
      <div className="flex text-md text-left mb-3">
        <Trophy />
        <span className="ml-5">Earn reputation and badges</span>
      </div>
    </div>
  );
};

export default Intro;
