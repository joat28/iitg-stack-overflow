import React, {useEffect, useState} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory, useLocation } from "react-router-dom";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
// import ViewQuestion from "../../components/ViewQuestion/ViewQuestion"
import { getQuestion } from "../../api/index";
import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";
import { useDispatch } from "react-redux";
import {getQuestionAction} from "../../redux/questions/questions.actions"
import QuestionSection from './QuestionSection/QuestionSection';

const ViewQuestionScreen = () => {
  // const [post, setPost] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getQuestionAction(location.pathname.split('/')[2]))
    // getQuestion(location.pathname.split('/')[2])
    //   .then((res) => {
    //     console.log(res.data.payload)
    //     setPost(res.data.payload)
    //     dispatch(stopLoadingAction())
    //   })
    //   .catch((error) => {
    //     dispatch(stopLoadingAction())
    //     history.push('/notfound')
    //   });
  }, [dispatch,history]);

  return (
    <React.Fragment>
      <div className="newClass"></div>
        <Alert />
        <LeftSideBar/>
        
        <div className="bg-white flex flex-row pl-72 ">
          <QuestionSection id={location.pathname.split("/")[2]} />
          <RightSideBar />
        </div>


    </React.Fragment>
  );
};
export default ViewQuestionScreen;
