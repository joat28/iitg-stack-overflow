import React, {useEffect, useState} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory, useLocation } from "react-router-dom";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
// import ViewQuestion from "../../components/ViewQuestion/ViewQuestion"
// import { getQuestion } from "../../api/index";
// import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";
import { useSelector, useDispatch } from "react-redux";
import QuestionSection from './QuestionSection/QuestionSection';
import AnswerSection from './AnswerSection/AnswerSection'
import Spinner from '../../components/Spinner/Spinner';
import {setLoadingQuestion} from "../../redux/questions/questions.actions";
import {setLoadingAnswers} from "../../redux/answers/answers.actions";

const ViewQuestionScreen = () => {
  // const [post, setPost] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(setLoadingQuestion());
  dispatch(setLoadingAnswers());

  return (
    <React.Fragment>
      <div className="newClass"></div>
        <Alert />
        <LeftSideBar/>  
        {/* {(loadingAnswer || loadingQuestion) && <Spinner />}      */}
         <div className="bg-white flex flex-row pl-72 ">
           <div className="flex flex-col">
          <QuestionSection id={location.pathname.split("/")[2]} />
          <AnswerSection question_id={location.pathname.split("/")[2]} />
          </div>
          <RightSideBar />
        </div>
        
    </React.Fragment>
  );
};
export default ViewQuestionScreen;
