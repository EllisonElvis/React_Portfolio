import React, { useEffect, useState, useContext } from 'react'
import '../css/Index.css'
import { NavLink, Link } from 'react-router-dom'
import { userContext } from '../stores/userContext';

const Header = () => {

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
        <>
            <div className="top-section">
                <div className='blurr'>
                    <header className={scrolled ? "header scrolled" : "header"}>
                        <h1 className="header__title">PortFolio.</h1>
                        <nav>
                            <ul className="header__nav">
                                <li><NavLink to="" onClick={() => ScrollToSection('home')}>Home</NavLink></li>
                                <li><NavLink to="/" onClick={() => ScrollToSection('about')}>About</NavLink></li>
                                <li><NavLink to="/" onClick={() => ScrollToSection('services')}>Services</NavLink></li>

                                <div className="dropdown">
                                    <li className='nav-link'>Drop▼</li>

                                    <div className="dropdown-menu">
                                        <Link to="/shoes">Project Details</Link>
                                    </div>
                                </div>

                                <li><NavLink to="/" onClick={() => ScrollToSection('contact')}>Contact</NavLink></li>
                            </ul>
                        </nav>
                    </header>

                    <section className="hero">
                        <div className="hero-content">
                            <h1>I love to create beautiful and <br /> efficient websites</h1>
                            <div className="hero-buttons">
                                <div className='button1'><NavLink to="/" onClick={() => ScrollToSection('about')}>Discover</NavLink></div>
                                <div className='button2'><NavLink to="/" onClick={() => ScrollToSection('contact')}>Contact Me</NavLink></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Header