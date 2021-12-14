import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormModal from '../../FormModal/FormModal';
import './Header.css';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className="header_container" expand="lg">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} className="ps-3" to="/">
                    <img width="150px" src="https://i.ibb.co/5kfgDNM/download.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 link_container"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/home">Home</Link>
                        <Link to="/howWeHelp">How We Help</Link>
                        <Link to="/programs">Programs</Link>
                        <Link to="/faqs">FAQS</Link>
                        <button className="getInTouchButton" onClick={handleShow} >Get In Touch</button>

                    </Nav>
                    <FormModal
                        show={show}
                        handleClose={handleClose}
                    />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;