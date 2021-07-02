import React, {useState, useEffect} from 'react';
import UpArrow from '../../assets/svg/UpArrow';
import DownArrow from '../../assets/svg/DownArrow';
import Spinner from '../Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
// import { getQuestion } from "../../api/index";
// import { setLoadingAction, stopLoadingAction } from "../../redux/loading/loading.actions";

const ViewQuestion = (props) => {
    const {loading} = useSelector(state=>state.loading);
    let postVotes = 0;
    if(!loading) postVotes=props.post.upvotes-props.post.downvotes 
    const [votes, setVotes] = useState(postVotes);
    
    const onClickUpvotes = () =>{
        return setVotes(vote => vote + 1);
    }
    const onClickDownvotes = () =>{
        return setVotes(vote => vote - 1);
    }
    
    return (
        <React.Fragment>
        {loading && <Spinner />}
        {!loading && <div className = "mt-16">
            {props.post.title}
            <UpArrow onClick= {onClickUpvotes} />
            <span>{votes}</span>
            <DownArrow onClick = {onClickDownvotes} />
        </div>}
        </React.Fragment>
    );
};

/*
answers: []
author: {_id: "60db657dea567a1bec8d0239", name: "prabhat", email: "prabhat@gmail.com", password: "$2a$10$bI5wV/CrB6kaepm8F5yDI.qcfKi6diCn50c2CvNni/NKrKqoKsqcq", createdAt: "2021-06-29T18:25:01.186Z", …}
comments: []
createdAt: "2021-06-29T18:42:00.255Z"
description: "how to implement login in stackoverflow"
downvotes: 0
tags: (3) ["css", "html", "web"]
title: "testing the api"
updatedAt: "2021-06-29T18:42:00.255Z"
upvotes: 0
__v: 0
_id: "60db6978790e3a1e380c588c"
__proto__: Object
*/

export default ViewQuestion;