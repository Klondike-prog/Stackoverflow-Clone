import React from "react";
import "./Questions.scss";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import UserQuestions from "./UserQuestions";
import Pagination from "./Pagination";
import IntroSectionQuestions from "../BgVideo2";

const Questions = () => {
  return (
    <>
    <IntroSectionQuestions/>
      <div className="container-fluid questions">
        <div className="row" style={{ margin: "0 8%"}}>
          {/* Left Sidebar added */}
          <div
            className=" col-md-2"
            style={{ fontSize: "14px",paddingRight:"100px",paddingTop:"100px", width:"50px"}}
          >
            <LeftSidebar />
          </div>
          <div
            className="questions--body col-md-7"
            style={{ fontSize: "12px" }}
          > 
            <hr />
            {/* Users Questionsadded */}
            <UserQuestions />

            {/* Pagination added */}
            <Pagination />
          </div>

          {/* Right Sidebar added */}
          <div
            className="questions-rightSidebar col-md-3"
            style={{ fontSize: "12px", lineHeight: "10px" }}
          >
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
