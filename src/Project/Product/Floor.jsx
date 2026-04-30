import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'react-bootstrap/Image';
import HeadarImg from '../../assets/floor_lamps.png';
import Card from 'react-bootstrap/Card';
import '../../Hanging_page.css';
import Sidebar from '../Sidebar';
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Floor() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    // ✅ Fetch products
    useEffect(() => {
        axios.get("http://localhost:3000/floor_lamp")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("API Error:", err));
    }, []);

    // ✅ Load cart from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) setCart(savedCart);
    }, []);

    // ✅ Save cart to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ✅ Add to cart
    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);

            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, qty: 1 }];
            }
        });

        setShowCart(true);
    };

    // ✅ Increase quantity
    const increaseQty = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // ✅ Decrease quantity (removes if 0)
    const decreaseQty = (id) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                )
                .filter(item => item.qty > 0)
        );
    };

    // ✅ Remove item
    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // ✅ Total price
    const totalPrice = cart.reduce((total, item) => {
        const cleanPrice = Number(String(item.price).replace(/[^0-9]/g, ""));
        return total + (cleanPrice * item.qty);
    }, 0);

    return (
        <>
            <Navbar />

            {/* HEADER IMAGE */}
            <div className='header'>
                <Image src={HeadarImg} fluid />
            </div>

            <section className='d-flex'>
                <Sidebar />

                <div className="container">
                    <Row className="carts g-4">
                        {products.map((item) => (
                            <Col xs={12} sm={6} md={4} key={item.id}>
                                <Card className="custom-card">

                                    <Link to={`/product/${item.category}/${item.id}`}>
                                        <div className="image-wrapper">
                                            <Card.Img variant="top" src={item.image} />
                                        </div>
                                    </Link>

                                    <Card.Body className="text-center d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="product-title">
                                                {item.name}
                                            </Card.Title>

                                            <Card.Text className="price">
                                                ₹ {item.price}
                                            </Card.Text>
                                        </div>

                                        <button
                                            className='cart_button mt-2'
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* ✅ CART DRAWER */}
            <Offcanvas
                show={showCart}
                onHide={() => setShowCart(false)}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>

                    {cart.length === 0 && <p>Your cart is empty</p>}

                    {cart.map((item) => (
                        <div key={item.id} className="d-flex mb-3 border-bottom pb-2">
                            <img src={item.image} width="70" height="70" alt="" />

                            <div className="ms-3 w-100">
                                <h6>{item.name}</h6>
                                <p>₹ {item.price}</p>

                                {/* Quantity Controls */}
                                <div className="d-flex align-items-center gap-2">
                                    <Button size="sm" onClick={() => decreaseQty(item.id)}>-</Button>
                                    <span>{item.qty}</span>
                                    <Button size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                                </div>

                                <Button
                                    variant="link"
                                    className="text-danger p-0 mt-1"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}

                    {/* TOTAL */}
                    {cart.length > 0 && (
                        <>
                            <h5>
                                Total Amount: ₹ {totalPrice.toLocaleString("en-IN")}
                            </h5>

                            <Button className="w-100 mt-2" variant="dark">
                                Checkout
                            </Button>
                        </>
                    )}

                </Offcanvas.Body>
            </Offcanvas>

            <Footer />
        </>
    );
}

export default Floor;