import axios from 'axios';
import React, { useActionState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Ragister() {

    const navigate = useNavigate();

    function submit(prev, formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        if (name === "") {
            return { error: "Enter Your Name" };
        }
        if (email === "") {
            return { error: "Enter Your Email" };
        }
        if (password === "") {
            return { error: "Enter Your Password" };
        }

        axios.post("http://localhost:3000/user", {
            name,
            password,
            email,
            role:"2"
        })
        .then(res => {
            console.log(res.data);
        });

        navigate("/login");

        return { success: "Registered Successfully" };
    }

    const [state, formAction, pending] = useActionState(submit, {});

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "400px", padding: "20px", borderRadius: "15px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                
                <h3 className="text-center mb-4">Register</h3>

                <Form action={formAction}>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control name="name" placeholder="Enter Your UserName" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter Your Password" />
                    </Form.Group>

                    {state?.error && (
                        <p className="text-danger">{state.error}</p>
                    )}

                    {state?.success && (
                        <p className="text-success">{state.success}</p>
                    )}

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100"
                        disabled={pending}
                    >
                        {pending ? "Submitting..." : "Submit"}
                    </Button>
                </Form>

            </Card>
        </Container>
    );
}

export default Ragister;