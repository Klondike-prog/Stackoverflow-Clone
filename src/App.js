import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import logo from "./Components/Images/logo1.png";
import { HomePage, Questions, RegisterPage, LoginPage} from "./Components";
import AddQuestion from "./Components/AddQuestion"
import MyQuestions from "./Components/MyQuestions/MyQuestions";

const App = () => {
  return (
    <>
      <Router>
        <nav className="app navbar navbar-expand-lg navbar-light bg-lightdark px-5">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="160px" />
          </Link>
            <ul className="navbar-nav mr-auto">
             
              <li className="nav-item mr-4" style={{paddingLeft:"40px"}}>
                <Link to="/questions" className="nav-link" style={{
                    
                    backgroundColor: "#003333", color: "#119872", borderColor:"#119872",fontSize:"30px", borderRadius:"20px",
                  }}>
                  Questions
                </Link>
              </li>
            </ul>
            <form className="form-inline mx-2 my-lg-0 mr-5">
              <span className="fas fa-search search"></span>
              <input 
                type="text"
                className="form-control pr-5 pl-4 searchInput"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search..."
                style={{ backgroundColor: "#003333", color: "#119872", borderColor:"#119872" }}
              />
              <Link to="/login" className="nav-link">
              <button
                className="btn btn-outline-primary my-sm-0 btn-sm px-3"
                type="submit"
                style={{ backgroundColor: "#003333", color: "#119872", borderColor:"#119872" }}
              >
                Log in
              </button>
                </Link>

              <Link to="/signup" className="nav-link">
              <button
                className="btn btn-primary my-sm-0 btn-sm px-3"
                type="submit"
                style={{ backgroundColor: "#003333", color: "#119872", borderColor:"#119872" }}
              >
             
                Sign Up
              </button>
                </Link>
             
            </form>
          
        </nav>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="addquestion" element={ <AddQuestion />} />
          <Route path="myquestions" element={ <MyQuestions/>} />
          <Route path="questions" element={<Questions />} />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="signup" element={<RegisterPage />} />
        </Routes>

      </Router>
    </>
  );
};

export default App;
