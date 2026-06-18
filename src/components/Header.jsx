import React, { useEffect, useState, useContext } from 'react'
import '../css/Index.css'
import { NavLink, Link } from 'react-router-dom'
import { userContext } from '../stores/userContext'

const Header = () => {
    const { isOpen, setIsOpen, handleClick } = useContext(userContext)

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const ScrollToSection = (id) => {
        const section = document.getElementById(id)

        section?.scrollIntoView({
            behavior: 'smooth',
        })

        setMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className="top-section">
                <div className="blurr">

                    <header className={scrolled ? "header scrolled" : "header"}>

                        <h1 className="header__title">PortFolio.</h1>

                        {/* HAMBURGER */}
                        <button
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <i
                                className={
                                    menuOpen
                                        ? "ri-close-line"
                                        : "ri-menu-3-line"
                                }
                            ></i>
                        </button>

                        <nav>
                            <ul className={`header__nav ${menuOpen ? "active" : ""}`}>

                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('home')}
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('about')}
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('services')}
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                {/* DROPDOWN */}
                                <li className="dropdown">

                                    <span className="nav-link">
                                        Projects <i class="ri-arrow-down-s-line"></i>
                                    </span>

                                    <div className="dropdown-menu">
                                        <Link to="/">
                                            Project Details
                                        </Link>
                                    </div>

                                </li>

                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('contact')}
                                    >
                                        Contact
                                    </NavLink>
                                </li>

                                <li className="head_socials">
                                    <a
                                        href="https://x.com/EllisonElvis37"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="ri-twitter-x-fill"></i>
                                    </a>

                                    <a href="#">
                                        <i className="ri-github-line"></i>
                                    </a>
                                </li>

                            </ul>
                        </nav>

                    </header>

                    <section className="hero">
                        <div className="hero-content">

                            <h1>
                                I love to create beautiful and efficient websites
                            </h1>

                            <div className="hero-buttons">

                                <div className="button1">
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('about')}
                                    >
                                        Discover
                                    </NavLink>
                                </div>

                                <div className="button2">
                                    <NavLink
                                        to="/"
                                        onClick={() => ScrollToSection('contact')}
                                    >
                                        Contact Me
                                    </NavLink>
                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Header