import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation Function
    const validate = () => {
        let newErrors = {};

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Valid email required";
        }

        if (!formData.firstName) newErrors.firstName = "First name required";
        if (!formData.lastName) newErrors.lastName = "Last name required";
        if (!formData.address) newErrors.address = "Address required";
        if (!formData.city) newErrors.city = "City required";
        if (!formData.state) newErrors.state = "State required";

        if (!/^[0-9]{6}$/.test(formData.pin)) {
            newErrors.pin = "Enter valid 6-digit PIN";
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter valid 10-digit phone";
        }

        return newErrors;
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            console.log(formData);

            // 👉 Integrate payment here (Razorpay / Stripe)
        } else {
            setErrors(validationErrors);
        }
    };

    const [product, setProduct] = useState([])
    const { id, category } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/${category}/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error("API Error:", err));
    }, [id, category])





    return (
        <Container className="mt-5">
            <Row>
                {/* LEFT FORM */}
                <Col md={7}>
                    <h4>Contact</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <h5>Delivery</h5>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Control
                                placeholder="Address"
                                name="address"
                                onChange={handleChange}
                                isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.address}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        placeholder="City"
                                        name="city"
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        name="state"
                                        onChange={handleChange}
                                        isInvalid={!!errors.state}
                                    >
                                        <option value="">State</option>
                                        <option>Gujarat</option>
                                        <option>Maharashtra</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.state}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        placeholder="PIN Code"
                                        name="pin"
                                        onChange={handleChange}
                                        isInvalid={!!errors.pin}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.pin}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="dark" type="submit" className="w-100">
                            Pay Now
                        </Button>
                    </Form>
                </Col>

                {/* RIGHT ORDER SUMMARY */}
                <Col md={5}>
                    <Card className="p-3">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                            // style={{ maxHeight: "100%" }}
                        />
                        <h5>Order Summary</h5>
                        <p>Product: {product.name}</p>
                        <p>Subtotal: {product.price}</p>
                        <p>Shipping: Free</p>
                        <h5>Total: {product.price}</h5>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;