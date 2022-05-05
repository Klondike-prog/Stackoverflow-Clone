import React from "react";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <>
    {/* Left sidebar started */}
      <div  style={{paddingTop:"50px"}}></div>
       <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872"}}
          >
            <Link to="/" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            Home
            </Link>
          </button >
         
       <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872"}}
          >
            <Link to="/addquestion" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            Ask Question
            </Link>
          </button >
         
       <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "#119872"}}
          >
            <Link to="/myquestions" style={{ textDecoration: 'none', color:"white", fontWeight:"600"}}>
            My Questions
            </Link>
          </button >
       {/* Left sidebar Ends */}
    </>
  );
};

export default LeftSidebar;
