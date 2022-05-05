import React from "react";
import "./MyQuestions.scss";
import MyUserQuestions from "./MyUserQuestions";
import IntroSectionQuestions from "../BgVideo2";

const MyQuestions = () => {
  return (
    <>
    <IntroSectionQuestions/>
      <div className="container-fluid questions">
        <div className="row" style={{ margin: "0 8%"}}>
          <div
            className="questions--body col-md-7"
            style={{ fontSize: "12px" }}
          > 
            <hr />
            {/* Users Questionsadded */}
            <h3>These are the Questions You've posted!</h3>
            <MyUserQuestions />

          </div>
        </div>
      </div>
    </>
  );
};

export default MyQuestions;
