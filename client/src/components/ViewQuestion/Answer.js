import React, {useEffect} from 'react'
import UpArrow from "../../assets/svg/UpArrow";
import DownArrow from "../../assets/svg/DownArrow";
// import { useDispatch } from "react-redux";
// import { getAllAnswers } from '../../api/index.js';
// import { stopLoadingAction } from "../../redux/loading/loading.actions";


const Answer = (props) => {
    // const dispatch = useDispatch();
    const answer = props.answer;
    console.log("name of author ", answer.author.name);
    return (
        <div>
            {answer.description}
            {answer.author.name}
        </div>
    )
}

export default Answer;
