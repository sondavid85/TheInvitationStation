import React, {useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { SIGN_UP } from '../utils/mutations'
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";



const Signupform = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp, { data }] = useMutation(SIGN_UP);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!!!userPassword || !!!confirmPassword) || userPassword != confirmPassword) {
      setShowPasswordAlert(true);
      return;
    }
    try {
      await signUp({ variables: { email: userEmail, password: userPassword } });
      console.log(data);
      navigate("/");
      // Optionally redirect to the login page or display a success message
        } catch (error) {
      console.error(error);
      // Optionally handle errors, e.g., display error messages
    }
    }

    
    return (
      <div>
        <div class="hero">
        <img src="./logo.jpg" className="logo"/>
      </div>
      <section style={{"width":"50%","text-align":"center","margin-left":"25%","font-style":"italic","margin-top":"1em"}}>
        <h6>Create beautifully customized invitations effortlessly for weddings, parties, and events with our intuitive invitation generator. Choose from a variety of elegant templates, personalize with your event details, and download or share your invitations hassle-free. Make every occasion memorable with our easy-to-use invitation creation tool.</h6>
      </section>
        <div className="form-signup">
          <div className="row align-items-center"></div>
          <div className="row align-items-center">
            <div className="col"></div>
            <div className="col align-items-center login-col">
              <h1>Sign Up</h1>
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

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={ confirmPassword } onChange={(e) => setConfirmPassword(e.target.value)} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                  Submit
                  </Button>
                  {data && <Alert key='success' variant='success'>Sign up successful!</Alert>}
                  {showPasswordAlert ? <Alert key='danger' variant='danger' style={{'margin-top:':'1em'}}>Please enter/confirm your password and make sure that they match.</Alert> : null}
              </Form>
            </div>
            <div className="col"></div>
          </div>
          <div className="row align-items-center"></div>      
        </div>
      </div>
    )
  };


export default Signupform;
