import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {FaAngleDown} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import {IoCall} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {ImGooglePlus} from "react-icons/im";
const Header = () => {

    return <>
        <div className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-8">
                        <ul className="header-contact">
                            <li>
                                <MdOutlineEmail />
                                <span>info@yourdomain.com</span>
                            </li>
                            <li>
                                <IoCall />
                                <span>123-456-7878</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-4 ">
                        <div className="header-links">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <ImGooglePlus />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div>
                            <LazyLoadImage
                                alt="logo"
                                src={"logo.png"}
                                className="nav-logo"
                            />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 ">
                        <ul className="nav-menu d-flex">
                            <li>Home</li>
                            <li className="nav-pages">
                                Page
                                <FaAngleDown className="nav-icon"/>
                                <ul className="sub-menu">
                                    <li>About</li>
                                    <li>Galary</li>
                                    <li>FAQ</li>
                                </ul>
                            </li>
                            <li>Service</li>
                            <li>PORTFOLIO</li>
                            <li>TESTIMONIAL</li>
                            <li>NEWS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Header;
