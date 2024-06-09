import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth"
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function Loginform() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [login, { error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const{data}= await login({ variables: { email: userEmail, password: userPassword } });
      console.log(data);
      Auth.login(data.login.token);
      setLoginSuccess(true);
      // Redirect to /events if login successful
      navigate("/events");
        } catch (error) {
      console.error(error);
      setLoginSuccess(false);
    }
    }

  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {loginSuccess && (
        <div className="alert alert-success mt-3" role="alert">
          Login successful!
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Loginform;
