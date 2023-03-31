import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h3 className="logo">mysocial</h3>
          <span className="desc">
            MySocial helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="right">
          <div className="box">
            <input
              placeholder="Email address or phone number"
              className="boxInput"
            />
            <input placeholder="Password" className="boxInput" />
            <button onClick={handleLogin} className="loginBtn">
              Log in
            </button>
            <span className="forgot">Forgotten password?</span>
            <hr />
            <Link to="/register">
              <button className="registerBtn">Create a new account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
