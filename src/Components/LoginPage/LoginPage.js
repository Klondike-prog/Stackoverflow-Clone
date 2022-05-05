import React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Logo from "../Images/logo2.png";
import IntroSection from "../BgVideo";

const LoginPage = () => {
  return (
    <>
      <IntroSection/>
      <div className="container loginPage">
        <form className="border px-5 pb-5 m-5 loginPage--form">
          <div className="loginPage--form--img">
            <img src={Logo} alt="" width="120px" />
            <h3 className="center mt-2">Login</h3>
          </div>

          {/* Input Box startes */}
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23">
              Your Email
            </label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "rgba(242, 116, 13, 0.308)",
                   
                  }}
                >
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="@gmail.com"
                aria-label="gmail"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23">
              Password
            </label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "rgba(242, 116, 13, 0.308)",
                  }}
                >
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {/* Input Box Ends */}

          {/* Remember me startes */}
          <div className="d-flex justify-content-between mb-4">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label" for="form1Example3" style={{
                    color: "rgb(242, 116, 13)",
                    
                  }}>
                {" "}
                Remember me{" "}
              </label>
            </div>
            <Link to="/">
              <small style={{
                    color: "rgb(242, 116, 13)",fontWeight:"600",fontSize:"0.93rem"}}> forgot Password?</small>
            </Link>
          </div>
          {/* Remember me Ends */}

          {/* Signup Buttons starts */}
         <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872" }}
          >
            <Link to="/" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            Log In
            </Link>
          </button >
          
          <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872" }}
          >
            <Link to="/signup" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            Don't have an account? Sign Up
            </Link>
          </button >
          
          {/* Signup Buttons Ends */}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
