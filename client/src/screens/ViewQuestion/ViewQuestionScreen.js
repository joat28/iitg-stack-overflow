import React, {useEffect, useState} from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import { useHistory, useLocation } from "react-router-dom";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import ViewQuestion from "../../components/ViewQuestion/ViewQuestion"
import { getQuestion } from "../../api/index";
import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";
import { useDispatch } from "react-redux";

const ViewQuestionScreen = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  dispatch(setLoadingAction());
  useEffect(() => {
    getQuestion(location.pathname.split('/')[2])
      .then((res) => {
        setPost(res.data.payload)
        dispatch(stopLoadingAction())
      })
      .catch((error) => {
        history.push('/notfound')
        dispatch(stopLoadingAction())
      });
  }, [dispatch,history]);

  return (
    <React.Fragment>
      <div className="newClass"></div>
        <Alert />
        <LeftSideBar/>
        
        <div className="bg-white flex flex-row pl-72 ">
          <ViewQuestion post={post} id={location.pathname.split("/")[2]} />
          <RightSideBar />
        </div>


    </React.Fragment>
  );
};
export default ViewQuestionScreen;
