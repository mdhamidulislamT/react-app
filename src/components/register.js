import React, { useState } from "react";

const Register = (props) => {
  const { logindata } = props;

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    console.log(user);
  };

  return (
    <div className="reg">
      <h1> Register Form || {logindata.uName}</h1>
      <form className="frm" onSubmit={handleSubmit}>
        <br />
        <label>Name:</label>
        <input
          className="input"
          type="text"
          placeholder="Enter a name"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
        />
        <br />
        <label>email:</label>
        <input
          className="input"
          type="email"
          placeholder="Enter a email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <br />
        <label>Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />
        <br />
        <button className="input" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
