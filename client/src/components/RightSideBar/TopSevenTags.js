import React from "react";
import { useSelector } from "react-redux";

const TopSevenTags = () => {
  const mapOfQuestions = new Map();
  const questions = useSelector((state) => state.question.questions);

  questions.map((question) => {
    return question.tags.forEach((tag) => {
      if (!mapOfQuestions.get(tag)) {
        mapOfQuestions.set(tag, 1);
      } else {
        mapOfQuestions.set(tag, mapOfQuestions.get(tag) + 1);
      }
    });
  });
  const questionArray = [...mapOfQuestions];
  questionArray.sort(function (a, b) {
    return b[1] - a[1];
  });
  const topSevenTags = [];
  for (let i = 0; i < questionArray.length && i < 7; i++)
    topSevenTags.push(questionArray[i]);

  console.log("Top seven tags is ", topSevenTags);
  let key = 0;
  return (
    <>
      <h1 className="text-left">Top Seven Tags</h1>
      <div className="flex flex-wrap">
        {topSevenTags.map((tag) => (
          <div className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600  rounded">{`${tag[0]} x ${tag[1]}`}</div>
        ))}
      </div>
    </>
  );
};
export default TopSevenTags;
