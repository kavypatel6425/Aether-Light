import React from "react";
import Image from 'react-bootstrap/Image';
import Imagename from '../assets/logo_3.png'
import Location from '../assets/location_icone.png'
import Mail from '../assets/mail_icone.png'
import Call from '../assets/call_icone.png'

const Footer = () => {
    return (
        <footer className="py-5 footer">
            <div className="container">
                <div className="row">

                    {/* Logo Section */}
                    <div className="col-md-3 mb-4">
                        <Image src={Imagename} className='footer_logo' />

                        <div className='location d-flex '>
                            <Image src={Location} />
                            <p>129-130 Shilp Revanta, Club O7 Road,opp CLUB O7,Khadiya, Shela, Ahmedabad Gujarat 380059</p>
                        </div>
                        <div className='mail d-flex'>
                            <Image src={Mail} />
                            <p>aetherlight025@gmail.com</p>
                        </div>
                        <div className='call d-flex'>
                            <Image src={Call} />
                            <div className='call_number'>
                                <span>+91 6353382370</span> <br />
                                <span>+91 6353771570</span>
                            </div>
                        </div>

                        <div className="d-flex gap-3 mt-4  text-white">
                            <span>f</span>
                            <span>t</span>
                            <span>ig</span>
                            <span>in</span>
                        </div>
                    </div>

                    {/* Customer Support */}
                    <div className="col-md-4 mb-4">
                        <h6 className="fw-bold mb-3 text-white">CUSTOMER SUPPORT</h6>
                        <ul className="list-unstyled small text-white">
                            <li>Contact Us</li>
                            <li>Track Your Order</li>
                            <li>After Sale Support</li>
                            <li>FAQ</li>
                            <li>Warranty Policy</li>
                            <li>Return and Exchange Policy</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Refund Policy</li>
                        </ul>

                       
                    </div>

                    {/* Discover Section */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3 text-white">DISCOVER AETHER LIGHTING</h6>
                        <ul className="list-unstyled text-white small">
                            <li>About Us</li>
                            <li>Catalogues</li>
                            <li>Our Portfolio</li>
                            <li>Become Our Design Partner</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3 text-white">NEWSLETTER</h6>
                        <p className="small text-white">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>

                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="E-mail"
                        />
                        <button className="btn btn-dark w-100">
                            SUBSCRIBE
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;