import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>

                    <NavLogo to="/" onClick={toggleHome} >Medico Assistant</NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="discover"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            smooth={true} 
                            duration={1000} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
