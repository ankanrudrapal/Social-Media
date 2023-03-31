import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="up">
          <h1>Sign Up</h1>
          <span>It's quick and easy.</span>
        </div>
        <hr />
        <div className="box">
          <input type="text" className="boxInput" placeholder="First name" />
          <input type="text" className="boxInput" placeholder="Surname" />
          <input
            type="email"
            className="boxInput"
            placeholder="Mobile number or email address"
          />
          <input
            type="password"
            className="boxInput"
            placeholder="New password"
          />
          <hr/>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
