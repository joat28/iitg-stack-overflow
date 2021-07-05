import React, {useEffect, useState} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory, useLocation } from "react-router-dom";
import ViewQuestion from "../../components/ViewQuestion/ViewQuestion"
import { getQuestion } from "../../api/index";
import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";
import { useDispatch, useSelector } from "react-redux";
import QuestionSection from "./QuestionSection/QuestionSection"
import AnswerSection from "./AnswerSection/AnswerSection"
import SideBarWidget from '../../components/RightSideBar/SideBarWidget'

const ViewQuestionScreen = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  
  const loadingAnswers = useSelector(state => state.answer.loading)
  const loadingQuestion = useSelector(state => state.question.loading)
  // const dispatch = useDispatch();
  // const history = useHistory();
  // dispatch(setLoadingAction());
  // useEffect(() => {
  //   getQuestion(location.pathname.split('/')[2])
  //     .then((res) => {
  //       console.log(res.data.payload)
  //       setPost(res.data.payload)
  //       dispatch(stopLoadingAction())
  //     })
  //     .catch((error) => {
  //       history.push('/notfound')
  //       dispatch(stopLoadingAction())
  //     });
  // }, [dispatch,history]);

  return (
    <React.Fragment>
        <Alert />
        <LeftSideBar/>
        
        <div className="bg-white flex flex-row pl-72 min-h-screen">
          <div className="flex flex-col w-3/4">
            <QuestionSection question_id={location.pathname.split('/')[2]} />
            <AnswerSection question_id = {location.pathname.split('/')[2]} />
          </div>
          <div className="mt-16 mr-10 ml-10 w-1/4">
          {/* <div className="flex flex-col w-1/3 ml-10 mr-10 mt-16 "> */}
          {(!loadingAnswers && !loadingQuestion) && <SideBarWidget/>}
          </div>
          {/* <ViewQuestion post={post} id={location.pathname.split("/")[2]} /> */}
        </div>


    </React.Fragment>
  );
};
export default ViewQuestionScreen;
