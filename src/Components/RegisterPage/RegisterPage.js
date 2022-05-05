import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/image.jpg";
import IntroSection from "../BgVideo";


const RegisterPage = () => {
  return (
    <>
    <IntroSection/>
      <div classNameName="loginPage">
        <section className="vh-100">
          <div className="container py-5">
            <div className="row d-flex w-100 h-100">
              {/* left Side Stack Overflow community part started*/}
              <div className="col-md-8 col-lg-7 " style={{paddingRight:"100px"}}>
               
                <img src={Image} alt="" width="600px" style={{ 
                    borderRadius:"50px",paddingRight:"20px"}}/>
                
                <h3 className="font-weight-normal my-3"style={{
                    paddingLeft:"80px",paddingTop:"45px",color:"#119872",fontWeight:"600",}}>
                  Join the Stack Overflow community
                </h3>

              
                <div className="mt-4">
                  <small style={{
                    paddingLeft:"120px",color:"#119872",fontWeight:"600"}}>
                    Collaborate and share knowledge with a private group for
                    FREE. <br />
                   
                  </small>
                </div>
              </div>
              {/* left Side Stack Overflow community part Ends*/}

              {/* Signup form started */}
              <div className="col-md-7 col-lg-5 col-xl-5 registerPage--form border p-5 pb-0" style={{backgroundColor:"rgba(185, 185, 183, 0.233)", borderRadius: "5px",
    borderCcolor: "#119872",
    boxShadow: "2px 3px 10px gray",
    color:"rgb(242, 116, 13)"}}>
                <h2
                  className="text-center"
                  style={{
                    color: "rgb(242, 116, 13)",
                    fontFamily: "serif",
                  }}
                >
                  Sign up
                </h2>
                <p className="text-center pb-1">Let's Get Started!</p>
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example13">
                      Full Name
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
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Email
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
                        placeholder="hello@gmail.com"
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
                I agree with the Terms And Conditions{" "}
              </label>
            </div>
            
                  <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872" }}
          >
            <Link to="/" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
           Sign Up
            </Link>
          </button >
 
                </form>
              </div>
              {/* Signup form Ends */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
