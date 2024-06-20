import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {FaAngleDown} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPlus, FaTwitter} from "react-icons/fa";
import {ImGooglePlus} from "react-icons/im";
import Link from "next/link";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const navSection = document.querySelector('.nav-section');
            if (navSection) {
                const scrollTop = window.scrollY;
                if (scrollTop > 47) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleClick = () => {
        setIsChanged(!isChanged);
        setOpenSubMenu(false);
    };
    const handleClickSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
    }
    return (
        <>
            <div className="mean-section">
                <div className="mean-bar">
                    <h3>Menu</h3>
                    <div className={`bar-container ${isChanged ? 'change' : ''}`} onClick={handleClick}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <div className={`menu-bar ${isChanged ? 'open' : ''}`}>
                    <div><Link href={"/"}>Home</Link></div>
                    <div className="menu-bar-pages">
                        <Link href={"/"}>
                            Page
                            <FaPlus onClick={handleClickSubMenu}/>
                        </Link>
                        <div className={`menu-bar-pages-sub ${
                            openSubMenu ? 'open' : ''
                        }`}>
                            <div><Link href={"/"}>About</Link></div>
                            <div><Link href={"/"}>Gallery</Link></div>
                            <div><Link href={"/"}>FAQ</Link></div>
                        </div>
                    </div>
                    <div><Link href={"/"}>Service</Link></div>
                    <div><Link href={"/"}>Portfolio</Link></div>
                    <div><Link href={"/"}>Testimonial</Link></div>
                    <div><Link href={"/"}>News</Link></div>
                    <div><Link href={"/"}>Contact</Link></div>
                </div>
            </div>
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <ul className="header-contact">
                                <li>
                                    <MdOutlineEmail/>
                                    <span>info@yourdomain.com</span>
                                </li>
                                <li>
                                    <IoCall/>
                                    <span>123-456-7878</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="header-links">
                                <FaFacebookF/>
                                <FaTwitter/>
                                <FaInstagram/>
                                <FaLinkedinIn/>
                                <ImGooglePlus/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`nav-section ${isFixed ? 'fixed' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 logo-section">
                            <LazyLoadImage
                                alt="logo"
                                src={"logo.png"}
                                className="nav-logo"
                            />

                        </div>
                        <div className="col-md-9 col-sm-12 menu-section">
                            <ul className="nav-menu d-flex">
                                <li>Home</li>
                                <li className="nav-pages">
                                    Page
                                    <FaAngleDown className="nav-icon"/>
                                    <ul className="sub-menu">
                                        <li>About</li>
                                        <li>Gallery</li>
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
    );
};

export default Header;
