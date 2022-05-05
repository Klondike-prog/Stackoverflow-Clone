import React from "react";
import "./MyUserQuestions.scss";
import { Link } from "react-router-dom";

const MyUserQuestions = () => {
  return (
    <>
      {questions.map((que) => {
        return (
          <div
            className="userQuestions d-flex border-bottom py-2"
            style={{ fontSize: "12px" }}
          >
            <div className="left text-muted mr-3">
              <p className="">
                0<br />
                <span>votes</span>
              </p>
              <p className="">
                1<br />
                <span>answers</span>
              </p>
              <small>{que.view} views</small>
            </div>
            <div className="right">
              <Link to="/">
                <h5 className="que font-weight-normal">{que.question}</h5>
              </Link>
              <p>{que.ans}</p>
              <div className="d-flex">
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-sm text-light"
                  style={{
                    backgroundColor: "#119872",
                    width: "100px",
                    height: "35px",
                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Link
                    to="/addquestion"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "0.7rem",
                    }}
                  >
                    Write Answer
                  </Link>
                </button>
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-sm text-light"
                  style={{
                    backgroundColor: "#119872",
                    width: "100px",
                    height: "35px",
                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Link
                    to="/addquestion"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "0.7rem",
                    }}
                  >
                    Up Vote
                  </Link>
                </button>
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-sm text-light"
                  style={{
                    backgroundColor: "#119872",
                    width: "100px",
                    height: "35px",
                    marginTop: "10px",
                  }}
                >
                  <Link
                    to="/addquestion"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "0.7rem",
                    }}
                  >
                    Down Vote
                  </Link>
                </button>
              </div>
              <div className="profile float-right mt-4">
                <span className="mb-1">asked {que.time} ago</span>
                <h3
                  className="float-left"
                  style={{ right: "600px", position: "absolute" }}
                >
                  Comment Section
                </h3>
                <div className="d-flex mr-3">
                  <img
                    src={process.env.PUBLIC_URL + que.img}
                    alt="User"
                    className="mr-2"
                    width="40px"
                    height="40px"
                    style={{ borderRadius: "1rem" }}
                  />

                  <div>
                    <Link to="/">{que.user}</Link>
                  </div>
                </div>
              </div>
              <div
                className="profile float-left mt-4"
                style={{ top: "100%", position: "absolute" }}
              >
                <span className="mb-1" style={{ paddingLeft: "150px" }}>
                  answered {que.otherTime} ago
                </span>
                <div className="d-flex mr-3">
                  <div className="left text-muted mr-3">
                    <p className="">
                      0<br />
                      <span>votes</span>
                    </p>
                    
                    <div className="d-block"style={{position:"absolute",left:"-10%"}}>
                      <div className="d-flex">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-sm text-light"
                          style={{
                            backgroundColor: "#119872",
                            width: "100px",
                            height: "35px",
                            marginRight: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <Link
                            to="/addquestion"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "600",
                              fontSize: "0.7rem",
                            }}
                          >
                            Up Vote
                          </Link>
                        </button>
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-sm text-light"
                          style={{
                            backgroundColor: "#119872",
                            width: "100px",
                            height: "35px",
                            marginRight: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <Link
                            to="/addquestion"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "600",
                              fontSize: "0.7rem",
                            }}
                          >
                            Down Vote
                          </Link>
                        </button>
                      </div>
                      <div style={{ paddingLeft: "55px",position:"absolute",top:"93%" }}>
                        <button
                          type="submit"
                          className="btn btn-lg  btn-sm text-light"
                          style={{
                            backgroundColor: "#119872",
                            width: "100px",
                            height: "35px",
                            marginRight: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <Link
                            to="/addquestion"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "600",
                              fontSize: "0.7rem",
                            }}
                          >
                            Reply
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <img
                    src={process.env.PUBLIC_URL + que.otherImg}
                    alt="User"
                    className="mr-2"
                    width="40px"
                    height="40px"
                    style={{ borderRadius: "1rem" }}
                  />

                  <div>
                    <Link to="/">{que.otherUser}</Link>
                  </div>
                  <p style={{ paddingLeft: "25px", paddingTop: "10px" }}>
                    {que.ans}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MyUserQuestions;

const questions = [
  {
    view: 111,
    question: ` This is the title of the Question`,
    ans: ` This is Description of Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam qui
        s efficitur eros. Suspendisse ultricies diam sed lectus convallis porta. Null
        a at placerat nibh. Duis bibendum ut quam non aliquet. Vivamus dolor lorem, c
        ondimentum a faucibus nec, venenatis vel ex. Vivamus nisl nulla, tempor utNulla ultrices et d
        ui nec dapibus. Morbi posuere leo sed ligula pellentesque laoreet. Curabitur non semper u
        rna. Morbi vel arcu blandit, ornare m
        assa quis, pulvinar arcu. Phasellus auctor, libero et facilisis convallis, metus mi ultrices ante`,
    time: " 15 min",
    img: "../Images/user3.png",
    user: "Marvin Icha",
    otherUser:"Dolly Ich",
    otherImg:"../Images/user4.png",
    otherTime:" 1 min"
  },
];
