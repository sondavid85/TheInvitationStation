import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SIGN_UP } from '../utils/mutations'
import { useMutation } from "@apollo/client";



const Signupform = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [signUp, { data }] = useMutation(SIGN_UP);
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ variables: { email: userEmail, password: userPassword } });
      console.log(data);
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
            <Form.Control type="email" placeholder="Enter email" value={ userEmail } onChange={(e) => setUserEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={ userPassword } onChange={(e) => setUserPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            {data && <p>Sign up successful!</p>}
        </Form>
    )
  };


export default Signupform;
