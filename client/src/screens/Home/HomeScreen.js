import {React, useEffect} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import QuestionDisplay from "../../components/Question/QuestionDisplay";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {getQuestionsAction} from "../../redux/questions/questions.actions"

const HomeScreen = () => {
  // let tagsArray = [];
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestionsAction())
  },[dispatch])

  const [tagsArray, setTagsArray] = useState([]);
  const getTags = (tags) => {
    setTagsArray(tags);
  };
  return (
    <>
      <Alert />
      <LeftSideBar />
      <div className="bg-white flex flex-row pl-72">
        <QuestionDisplay tagsArray={tagsArray} />
        <RightSideBar getTags={getTags} />
      </div>
    </>
  );
};
export default HomeScreen;