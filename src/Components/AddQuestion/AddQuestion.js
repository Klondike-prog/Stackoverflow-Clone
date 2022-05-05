import React from "react";
import "./AddQuestion.scss";
import Logo from "../Images/logo2.png";
import  IntroSectionImage from "../BgImage/index"
import { Link } from "react-router-dom";


const AddQuestion = () => {
  return (
    <>
    <IntroSectionImage/>
      <div className="container loginPage ">
        <form className="border px-5 pb-5 m-5 loginPage--form"style={{backgroundColor:"#ff9933"}}>
          <div className="loginPage--form--img">
            <img src={Logo} alt="" width="120px" />
            <h3 className="center mt-2">Let's Get Started!</h3>
          </div>

          {/* Input Box startes */}
          <div className="form-outline mb-4  ">
            <label className="form-label" for="form1Example23 ">
              Add Title for Question Here
            </label>
            <div class="input-group flex-nowrap ">
              <div class="input-group-prepend ">
                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "#119872",
                  }}
                >
                  <i class="fas fa-code-branch"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="What's the title?"
                class="form-control "
                aria-describedby="addon-wrapping" 
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23 " >
            Add Your Question Details here
            </label>
            <div class="input-group flex-nowrap input-mysize " >
              <div class="input-group-prepend input-mysize" >
                <span
                  class="input-group-text input-mysize"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "#119872",
                  }}
                >
                  <i class="fas fa-bug"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control input-mysize"
                placeholder="What seems to be the problem?"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {/* Signup Buttons starts */}
          <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872"}}
          >
            <Link to="/myquestions"style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            Submit your issue
            </Link>
          </button>
         
        </form>
      </div>
    </>
  );
  
};
export default AddQuestion;


