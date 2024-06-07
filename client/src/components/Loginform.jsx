import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth"
import { useMutation } from "@apollo/client";

function Loginform() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const{data}= await login({ variables: { email: userEmail, password: userPassword } });
      console.log(data);
      Auth.login(data.login.token)
      // Optionally redirect to the login page or display a success message
        } catch (error) {
      console.error(error);
      // Optionally handle errors, e.g., display error messages
    }
    }

  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Loginform;
