import React from "react";
import "./HomePage.scss";
import  IntroSection from "../BgVideo/index"

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="homePage fixed">
        {/* mini black box */}
        <div className="homePage--innerDiv  text-light">
          <IntroSection/>
          {/* orange cards started */}
          <div className="homePage--innerDiv--box align-middle ">
            <div className="homePage--innerDiv--box--find ">
            <span
                 
                  
                >
                  <i class="fas fa-code-branch fa-2x"></i>
                </span>
              <p>
                Find the best answer to your technical question, help others
                answer theirs
              </p>
              <button
                type="button"
                className="homePage--innerDiv--box--find--btn btn"  style={{backgroundColor:"#ff9933"}}
              >
                <Link to="/addquestion" style={{ textDecoration: 'none', color:"black", fontWeight:"600"}}>Ask a Question, don't be shy </Link>
              </button>
              <br />
              <small style={{ color: "gray"}}>  
                <Link to="/questions"
                  style={{ color: "black", textDecoration: "underline", fontSize:"1rem"}}
               
                >
                    Search for plenty of content here
                </Link>
              </small>
            </div>
            {/* orange cards ends */}
          </div>
          {/* data Developer header starts */}
          <h1 className="homePage--innerDiv--header">
           We try to give the <span>Best Answers</span> 
          </h1>
          {/* data Developer header starts */}
          <div class="homePage--innerDiv--plain"></div>
        </div>
        
      </div>
     
    </>
  );
};

export default HomePage;


