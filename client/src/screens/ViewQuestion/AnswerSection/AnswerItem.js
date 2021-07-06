import {useState} from 'react'
import UpArrow from '../../../assets/svg/UpArrow'
import DownArrow from '../../../assets/svg/DownArrow'
import moment from 'moment';
import { EditAnswer } from './EditAnswer';

const AnswerItem = (props) => {
	const user = props.user;
	const answer = props.answer;
	
	let verified = (answer && (user._id===answer.author._id) ?(true):(false)) ;


	const [clicked,setClicked] = useState(false);
	
	const discardHandler = (event) => {
		setClicked(false);
	}

	const deleteAnswerHandler = (event) => {
		
	}
	const editClickHandler = (event) => {
		event.preventDefault();
		setClicked(true);
	}

    return (
        <div className="mt-2 flex flex-col w-full mb-6 border-b border-gray-300">
			{!clicked && <div className="flex pl-4 pt-4">
				<div className="flex flex-col items-center pt-2 ">
					<UpArrow />
					<span>0</span>
					<DownArrow  />
				</div>
				<div className="flex flex-col justify-between w-full text-left pl-2 mb-2">
					<div className="pb-14 break-all">{answer.description}</div>
					{/* <div className="text-right pr-11"></div> */}
					
					<div className="text-right flex justify-between items-center text-xs  ">
						<div className="text-base">
						{verified && <button onClick={editClickHandler}><span className="text-gray-400">edit</span></button>}
						{verified && <button onClick={deleteAnswerHandler}><span className="text-red-500 ml-2">delete</span></button>}
						</div>
						<div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
							<span className="text-gray-500">answered </span>
							<span className="text-gray-500">
									{moment(answer.createdAt).fromNow()}
									</span>
							<div className="text-s">{answer.author.name}</div>
						</div>
					</div>
				</div>
			</div>}
			{clicked && <EditAnswer answer={answer} discardHandler={discardHandler}/>}
		</div>
    )
}
  
export default AnswerItem;