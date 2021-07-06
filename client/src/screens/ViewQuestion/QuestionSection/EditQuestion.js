import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import {updateQuestion} from "../../../api/index"
import { setAlert } from '../../../redux/alert/alert.actions';

const EditQuestion = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const question = props.question;

    const [title, setTitle] = useState(question.title);
	const [description, setDescription] = useState(question.description);
    const [tags, setTags] = useState(question.tags.join(" "))
	// const user = useSelector((state) => state.auth.user)
        
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeBody = (event) => {
        setDescription(event.target.value);
    };
    const onChangeTags = (event) => {
        setTags(event.target.value);
    };
    const submitClickHandler = (event) => {
        event.preventDefault();
        if (tags.trim() === "" || description.trim() === "" || title.trim() === "") {
            return dispatch(setAlert({
              message: "All fields are required.",
              status: false
            }));
          }
        updateQuestion({ title, description, tags }, question._id).then(res => {
            // console.log('Post edited!');
            dispatch(setAlert({
                message: res.data.message,
                status: true
            }));
            // props.discardHandler();
            
            return window.location.reload();
        }).catch(error => dispatch(setAlert(error.message)));
    }

    return (
        <div className="p-2">
            <div className="text-left ml-2 font-medium">Title</div>
            <input
              onChange={onChangeTitle}
              type="text"
              value={title}
              className="w-full h-8 border mt-1 border-gray-600 p-3 text-sm rounded focus:border-blue-300 outline-none"
            />
            <div className="text-left ml-2 mt-3 font-medium ">Body</div>
            <textarea
            onChange={onChangeBody}
            type="text"
            value={description}
            className="w-full h-64 border text-sm mt-1 border-gray-600 p-3 rounded focus:border-blue-300 outline-none"
            />
            <div className="text-left ml-2 mt-3 font-medium ">Tags</div>
            <input
              onChange={onChangeTags}
              value={tags}
              type="text"
              className="w-full h-8 border mt-1 border-gray-600 p-3 text-sm rounded focus:border-blue-300 outline-none"
            />
            <div className = "flex flex-row justify-around"> 
            
            <button onClick={(event) => {props.discardHandler(event)}}><span className="flex items-center p-2 m-1 mt-3 bg-red-500 border-2 border-red-700 rounded text-white hover:bg-red-600 h-10">Discard Changes</span></button>			
            <button onClick={submitClickHandler}><span className="flex items-center p-2 px-3 m-1 mt-3 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">Save Changes</span></button>
            </div>	
      </div>
    )
}

export default EditQuestion;


// return (
//     <div className="w-4/6 h-screen">
//       <Alert />
//       <div className="bg-white w-full rounded shadow-md border border-gray-300">
//         <form className="flex flex-col p-4">
//           <label className="text-left ml-2 font-medium">Title</label>
//           <label className="text-left text-xs ml-2">
//             Be specific and imagine you're asking the question to another person
//           </label>
//           <div className="mx-2">
//             <input
//               onChange={onChangeTitle}
//               type="text"
//               placeholder="eg. is there an R function for finding the index of an element in a vector ?"
//               className="placeholder-gray-400 w-full h-8 border mt-1  border-gray-300 p-3 text-sm rounded focus:border-blue-300 outline-none"
//             />
//           </div>
//           <label className="text-left ml-2 mt-3 font-medium ">Body</label>
//           <label className="text-left text-xs ml-2">
//             Include all the information someone would need to answer your
//             question
//           </label>
//           <div className="mx-2">
//             <textarea
//               onChange={onChangeBody}
//               type="text"
//               className="placeholder-gray-400  w-full h-64 border text-sm mt-1 border-gray-300 p-3 rounded focus:border-blue-300 outline-none"
//             />
//           </div>
//           <label className="text-left ml-2 mt-3 font-medium ">Tags</label>
//           <div className="mx-2">
//             <input
//               onChange={onChangeTags}
//               type="text"
//               placeholder="eg. css html javascript"
//               className="placeholder-gray-400 w-full h-8 border mt-1 border-gray-300 p-3 text-sm rounded focus:border-blue-300 outline-none"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className=" flex items-center p-2 m-1 mt-3 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
//               type="submit"
//               onClick={clickHandler}
//             >
//               Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

