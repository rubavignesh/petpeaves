import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import log from "../../assets/images/image-removebg-preview (1).png";
import register from "../../assets/images/image-removebg-preview (1).png";
import "./SignUp.css";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginForm = () => {
  const [isSignUp, setSignUp] = useState(false);
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // const history = useNavigate();
  // const location = useLocation();

  const handleResponse = (res) => {
    // setLoggedInUser(res);
    // if (!res.error) {
    //     toast.success("Successfully Sign in")
    //     history.replace(from)
    // }
  };

  return (
    <div
      className={`${
        isSignUp
          ? "signin-signup-container sign-up-mode"
          : "signin-signup-container"
      }`}
    >
      {/* <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link> */}
      <div className="forms-container">
        <div className="signIn-singUp">
          <Login handleResponse={handleResponse} />
          <SignUp handleResponse={handleResponse} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome to PawsTime!</h3>
            <p>
              Your pets deserve the best care. Book vet and grooming
              appointments easily and keep your furry friends healthy and happy.
            </p>
            <button
              className="iBtn transparent"
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          <img src={`${log}`} alt="" className="pImg" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already a member?</h3>
            <p>
              Login to schedule appointments, manage your pet's health records,
              and explore our range of services for your beloved companions.
            </p>
            <button
              className="iBtn transparent"
              onClick={() => setSignUp(false)}
            >
              Sign In
            </button>
          </div>
          <img src={`${register}`} alt="" className="pImg" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
