import {React, useEffect} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Footer from "../../components/Footer/Footer"
import Alert from "../../components/Alert/Alert";
import QuestionDisplay from "../../components/Question/QuestionDisplay";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getQuestionsAction} from "../../redux/questions/questions.actions"
import Spinner from "../../components/Spinner/Spinner"

const HomeScreen = () => {
  // let tagsArray = [];
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestionsAction())
  },[dispatch])

  const loadingQuestions = useSelector(state => state.question.loading);

  const [tagsArray, setTagsArray] = useState([]);
  const getTags = (tags) => {
    setTagsArray(tags);
  };
  return (
    <>
      <Alert />
      <LeftSideBar />
      {loadingQuestions && <Spinner />}
      {!loadingQuestions && <div className="">
        <div className="bg-white flex flex-row pl-72">
        <QuestionDisplay tagsArray={tagsArray} />
        <RightSideBar getTags={getTags} />
        </div>
        <Footer />
      </div>}
    </>
  );
};
export default HomeScreen;