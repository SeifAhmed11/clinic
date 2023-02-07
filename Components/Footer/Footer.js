import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import faceBook from "../../assets/face.png";
import twitter from "../../assets/tw.png";
import instagram from "../../assets/ins.png";
import linkedIn from "../../assets/li.png";
import pls from '../../assets/pls.png'

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <img src={logo} className="footerLogo" />
                        <p>
                            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
                        </p>
                        <div className="footerContact">
                            <div className="footerIcon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="footerText">
                                <h6>Contact Us</h6>
                                <h4>+01 123 456 7890</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#About" >About Us</a></li>
                            <li><a href="#Services" >Services</a></li>
                            <li><a href="#Booking" >Booking</a></li>
                            <li><a href="#Faq" >Faq's</a></li>
                            <li><a href="#Blog" >Blogs</a></li>
                            <li><a href="#Team" >Out Team</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h2>Our Service</h2>
                        <ul>
                            <li><a href="#Dental" >Dental Care</a></li>
                            <li><a href="#Cardiac" >Cardiac Clinic</a></li>
                            <li><a href="#Massege" >Massege Therapy</a></li>
                            <li><a href="#Cardiology" >Cardiology</a></li>
                            <li><a href="#Precise" >Precise Diagnosis</a></li>
                            <li><a href="#Abmbulance" >Abmbulance Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Subcribe</h2>
                        <form>
                            <input type="email" placeholder="Enter Email" />
                            <button type="">Subcribe Now</button>
                        </form>
                        <ul className="social">
                            <li><a href="#faceBook"><img src={faceBook} /></a></li>
                            <li><a href="#twitter"><img src={twitter} /></a></li>
                            <li><a href="#instagram"><img src={instagram} /></a></li>
                            <li><a href="#linkedIn"><img src={linkedIn} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footerBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <span>Copyright © 2022 Design & Developed by <span className="myName">Seif Ahmed</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="plsFooter" src={pls} />
        </footer>
    )
}

export default Footer