import React from 'react'
import UpArrow from "../../assets/svg/UpArrow";
import DownArrow from "../../assets/svg/DownArrow";

const Answer = (props) => {
    const answer = props.answer
    return (
        <div>
            {answer.author.name}
        </div>
    )
}

export default Answer;
