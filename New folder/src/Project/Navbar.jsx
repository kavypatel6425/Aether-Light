// import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image';
// import Imagename from '../assets/logo_3.png';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './Slice/AuthSlice';
// import Modal from 'react-bootstrap/Modal';
// // import Hanging from './Hanging';

// function NavBar() {

//     const user = useSelector((state) => state.auth.user);
//     const dispatch = useDispatch();

//     const handleLogout = () => {
//         dispatch(login())
//     }

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <>
//             <Navbar expand="lg" className="nevbar">
//                 <Container>
//                     <Image src={Imagename} className='logo' />
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav ">
//                         <Nav className="me-auto nev_menu ">
//                             <NavDropdown title="Products" id="basic-nav-dropdown" >
//                                 <NavDropdown.Item  >
//                                     <Link to="/chandelier" className='text-decoration-none text-black'>CHANDELIER LIGHT</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item  >
//                                     <Link to="/hanging" className='text-decoration-none text-black'>HANGING LAMPS</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/wall" className='text-decoration-none text-black'>Wall LAMPS</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/ceiling" className='text-decoration-none text-black'>CEILING LAMPS</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/floor" className='text-decoration-none text-black'>FLOOR LAMPS</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/tablelamp" className='text-decoration-none text-black'>TABLE LAMPS</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/outdoorlights" className='text-decoration-none text-black'>OUTDOOR LIGHT</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item >
//                                     <Link to="/mirrorlights" className='text-decoration-none text-black'>MIRROR LIGHT</Link>
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action/3.4">
//                                     Separated link
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                     </Navbar.Collapse>



//                     <Modal show={show} onHide={handleClose}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>User Profile</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             {
//                                 user ? (
//                                     <>
//                                         <p><strong>Name:</strong> {user.name}</p>
//                                         <p><strong>Email:</strong> {user.email}</p>
//                                         <p><strong>Role:</strong> {user.role === "1" ? "Admin" : "User"}</p>
//                                     </>
//                                 ) : (
//                                     <p>No user data found</p>
//                                 )
//                             }
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>


//                     {
//                         user ? (
//                             <>
//                                 <Button onClick={handleLogout} className='me-3'>
//                                     Logout
//                                 </Button>
//                                 <Button variant="primary" onClick={handleShow}>
//                                     Profile
//                                 </Button>
//                             </>
//                         ) : (
//                             <Link to={"login"}><Button >Login</Button></Link>
//                         )
//                     }

//                 </Container>
//             </Navbar>


//         </>
//     )
// }

// export default NavBar













import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Imagename from '../assets/logo_3.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Slice/AuthSlice';
import Modal from 'react-bootstrap/Modal';

function NavBar() {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(login())
    }

    const [show, setShow] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar
                expand="lg"
                sticky="top"
                className={`nevbar ${scrolled ? "navbar-scrolled" : ""}`}
            >
                <Container>

                    {/* Logo */}
                    <Image src={Imagename} className='logo' />

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nev_menu">

                            {/* Products Dropdown */}
                            <NavDropdown
                                title="Products"
                                id="basic-nav-dropdown"
                                className="custom-dropdown"
                                show={dropdownOpen}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <NavDropdown.Item as={Link} to="/chandelier">
                                    CHANDELIER LIGHT
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/hanging">
                                    HANGING LAMPS
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/wall">
                                    WALL LAMPS
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/ceiling">
                                    CEILING LAMPS
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/floor">
                                    FLOOR LAMPS
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/tablelamp">
                                    TABLE LAMPS
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/outdoorlights">
                                    OUTDOOR LIGHT
                                </NavDropdown.Item>

                                <NavDropdown.Item as={Link} to="/mirrorlights">
                                    MIRROR LIGHT
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>

                    {/* Modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>User Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                user ? (
                                    <>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Role:</strong> {user.role === "1" ? "Admin" : "User"}</p>
                                    </>
                                ) : (
                                    <p>No user data found</p>
                                )
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Auth Buttons */}
                    {
                        user ? (
                            <>
                                <Button onClick={handleLogout} className='me-3'>
                                    Logout
                                </Button>
                                <Button variant="primary" onClick={handleShow}>
                                    Profile
                                </Button>
                            </>
                        ) : (
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                        )
                    }

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;