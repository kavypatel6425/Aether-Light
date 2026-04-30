import React from 'react'
import Nevbar from '../Navbar'
import Footer from '../Footer'
import Image from 'react-bootstrap/Image';
import HeadarImg from '../../assets/Hanging(1).png';
import Cart_1 from '../../assets/hanging_cart_1.png';
import Cart_2 from '../../assets/hanging_cart_2.png';
import Cart_3 from '../../assets/hanging_cart_3.png';
import Cart_4 from '../../assets/hanging_cart_4.png';
import Cart_5 from '../../assets/hanging_cart_5.png';
import Cart_6 from '../../assets/hanging_cart_6.png';
import Cart_7 from '../../assets/hanging_cart_7.png';
import Cart_8 from '../../assets/hanging_cart_8.png';
import Cart_9 from '../../assets/hanging_cart_9.png';
import Cart_10 from '../../assets/hanging_cart_10.png';
import Cart_11 from '../../assets/hanging_cart_11.png';
import Cart_12 from '../../assets/hanging_cart_12.png';
import Cart_13 from '../../assets/hanging_cart_13.png';
import Cart_14 from '../../assets/hanging_cart_14.png';
import Cart_15 from '../../assets/hanging_cart_15.png';
import Card from 'react-bootstrap/Card';
import '../../Hanging_page.css'
import Sidebar from '../Sidebar';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Living_room() {

    const products = [
        {
            id: 1,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 59,000",
            image: Cart_1,
        },
        {
            id: 2,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 128,000",
            image: Cart_2,
        },
        {
            id: 3,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 52,000",
            image: Cart_3,
        },
    ];

    const products1 = [
        {
            id: 1,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 84,000",
            image: Cart_4,
        },
        {
            id: 2,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 64,000",
            image: Cart_5,
        },
        {
            id: 3,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 56,000",
            image: Cart_6,
        },
    ];
    const products2 = [
        {
            id: 1,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 38,000",
            image: Cart_7,
        },
        {
            id: 2,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 58,000",
            image: Cart_8,
        },
        {
            id: 3,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 450,135",
            image: Cart_9,
        },
    ];

    const products3 = [
        {
            id: 1,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 135",
            image: Cart_10,
        },
        {
            id: 2,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 45135",
            image: Cart_11,
        },
        {
            id: 3,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 21,000",
            image: Cart_12,
        },
    ];
    const products4 = [
        {
            id: 1,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 8,700",
            image: Cart_13,
        },
        {
            id: 2,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 22,000",
            image: Cart_14,
        },
        {
            id: 3,
            name: "AETHER LUNARIA MODERN LED COPPER GLASS LUXURY CHANDELIER",
            price: "₹ 9,600",
            image: Cart_15,
        },
    ];



    return (
        <>
            <Nevbar />

            <div className='header'>
                <Image src={HeadarImg} />
            </div>

            <section className='d-flex'>
                <Sidebar />
                <div>
                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <Link to="/addcart"><button className='cart_button'>Add to Cart</button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products1.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price" >
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products2.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products3.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products4.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Living_room