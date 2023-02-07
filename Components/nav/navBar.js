import React from "react";
import {Navbar , Container , Nav , NavDropdown  } from 'react-bootstrap';
import './navBar.css';
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Nav_Bar =()=>{
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="home" className="active" >Home</Link>
                <NavDropdown className="top" title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
                </NavDropdown>
                <Link to="contact" >
                <NavDropdown className="top" title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
                </NavDropdown>
                </Link>
                
                <NavDropdown className="top" title="Blog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
                </NavDropdown>
                <Link to="contact" href="#contactUs">Contact US</Link>
                <Nav.Link className="top" href="#contactUs">
                <FontAwesomeIcon icon={faSearch} />
                </Nav.Link>
                <Nav.Link className="top" href="#contactUs">
                    <FontAwesomeIcon icon={faPhone} />
                    +(+01) 999 888 777</Nav.Link>
                <Link to="contact" >
                    <button>Contact US 
                        <span > 
                            <FontAwesomeIcon icon={faGreaterThan} />
                        </span>
                    </button>
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


export default Nav_Bar;