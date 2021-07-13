import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import Spinner from "../../components/Spinner/Spinner";
import { NavLink } from "react-router-dom";
import Nothing from "../../assets/svg/Nothing";

const SearchResults = (props) => {
    const url = props.url;
    console.log(url);
    const { questions } = useSelector((state) => state.question);
    const [visibleQues, setVisibleQues] = useState([]);
    const[localLoading, setLocalLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0,0);
    setLocalLoading(false);
    if(questions && questions.length > 0)
        setVisibleQues([...questions.filter(question=>(question.title.toLowerCase().includes(url) || question.description.toLowerCase().includes(url)))]);
  }, [url, questions]);

  return (
    <>
      {/* {loading && <Spinner />} */}
      {!localLoading && visibleQues && (
        <div className="flex flex-col mt-16 mb-10 w-screen">
          <div className="flex justify-between items-center py-4 px-8">
            <h1 className="text-2xl font-semibold">Search Results</h1>
            <NavLink to="/question/ask">
              <button className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
                Ask Question
              </button>
            </NavLink>
          </div>
          {visibleQues && visibleQues.length === 0 && (
            <>
              <p className="mt-16 text-lg">No questions to show.</p>
              <div>
                <Nothing />
              </div>
            </>
          )}
          {visibleQues && visibleQues.length > 0 &&
            visibleQues.map((question) => (
              <SearchItem
                key={question._id}
                data={question}
              />
            ))}
        </div>
      )}
      {localLoading && <Spinner/>}
    </>
  );
};

export default SearchResults;
