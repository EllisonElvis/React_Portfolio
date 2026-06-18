import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { userContext } from '../stores/userContext'

const Nav = () => {

    const { isOpen, setIsOpen, handleClick } = useContext(userContext);


    const [scrolled, setScrolled] = useState(false);
    const ScrollToSection = (id) => {
        const section = document.getElementById(id)

        section?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <header className={scrolled ? "header scrolled" : "header"}>
                <h1 className="header__title">PortFolio.</h1>

                

                <nav >
                    <ul >
                        <li><NavLink to="" onClick={() => ScrollToSection('home')}>Home</NavLink></li>
                        <li><NavLink to="/" onClick={() => ScrollToSection('about')}>About</NavLink></li>
                        <li><NavLink to="/" onClick={() => ScrollToSection('services')}>Services</NavLink></li>

                        <div className="dropdown">
                            <li className='nav-link'>Drop▼</li>

                            <div className="dropdown-menu">
                                <Link to="/projects">Project Details</Link>
                            </div>
                        </div>

                        <li><NavLink to="/" onClick={() => ScrollToSection('contact')}>Contact</NavLink></li>

                        <div className="head_socials">
                            <a href="https://x.com/EllisonElvis37">
                                <i className="ri-twitter-x-fill"></i>
                            </a>
                            <a href="#">
                                <i className="ri-github-line"></i>
                            </a>

                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav