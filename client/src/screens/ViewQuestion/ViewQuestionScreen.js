import React, {useEffect, useState} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory, useLocation } from "react-router-dom";
import ViewQuestion from "../../components/ViewQuestion/ViewQuestion"
import { getQuestion } from "../../api/index";
import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";
import { useDispatch } from "react-redux";
import QuestionSection from "./QuestionSection/QuestionSection"
import AnswerSection from "./AnswerSection/AnswerSection"

const ViewQuestionScreen = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
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
      <div className="newClass"></div>
        <Alert />
        <LeftSideBar/>
        
        <div className="bg-white flex flex-row pl-72 ">
          <div className="flex flex-col">
            <QuestionSection question_id={location.pathname.split('/')[2]}/>
            <AnswerSection question_id = {location.pathname.split('/')[2]} />
          </div>
          {/* <ViewQuestion post={post} id={location.pathname.split("/")[2]} /> */}
        </div>


    </React.Fragment>
  );
};
export default ViewQuestionScreen;
