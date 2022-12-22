import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:8000/api/login`, {
        _token: "tlkfrrwelrklwerkweqkrlwe",
        password: password,
      password: password
    })
    .then(response => {
      // handle successful login
      alert(JSON.stringify(response))
    })
    .catch(error => {
      // handle login error
      alert(JSON.stringify(error))
    });
  }

 
  

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
            <h4>Login Form</h4>
          <Form.Group className="mb-3 mt-3" controlId="BookName">
            <Form.Label> Email Address </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email Address"
            />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label> Password </Form.Label>
            <Form.Control
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
