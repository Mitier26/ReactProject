import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";


    const Login =({setAuth})=>{
        const navigate = useNavigate();

        const loginUser = (event)=>{
            event.preventDefault();
            //console.log("로그인됨");
            setAuth(true);
            navigate("/");
        }

    return (<Container>
        <Form onSubmit={(event)=>loginUser(event)}>
           <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
           </Form.Group>
           <Button variant="danger" type="submit">로그인</Button>
        </Form>
    </Container>)
} 

export default Login;