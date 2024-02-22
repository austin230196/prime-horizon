const Nav = () => {
    const theme = useTheme();
    const [showMobileNav, setShowMobileNav] = useState(false);
    const navItems = [
        {
            name: "Home",
            to: "#home"
        },
        {
            name: "Why Choose Us",
            to: "#choose"
        },
        {
            name: "Properties",
            to: "#properties"
        },
        {
            name: "Our Services",
            to: "#services"
        },
        {
            name: "Testimonials",
            to: "#testimonials"
        },
        {
            name: "Blog",
            to: "#blog"
        },
    ];

    console.log();

    function toggleMobileNavHandler(){
        setShowMobileNav(() => !showMobileNav);
    }
    function hideMobileNavHandler(){
        setShowMobileNav(() => false);
    }
    return (
        <NavWrapper>
            <Logo />
            <NavItems>
                {
                    navItems.map(({to, name}, i) => (
                        <NavItem key={i}>
                            <a style={{color: window.location.hash === to ? theme.info.main : theme.secondary.main}} href={to}>
                                {name}
                            </a>
                        </NavItem>
                    ))
                }
                <button>Contact Us</button>
            </NavItems>
            <span onClick={toggleMobileNavHandler}>
                <GiHamburgerMenu />
            </span>
            {
                showMobileNav && (
                    <MobileNav>
                        {
                            navItems.map(({to, name}, i) => (
                                <MobileNavItem key={i}>
                                    <a style={{color: window.location.hash === to ? theme.info.main : theme.secondary.main}} href={to} onClick={hideMobileNavHandler}>
                                        {name}
                                    </a>
                                </MobileNavItem>
                            ))
                        }
                        <button>Contact Us</button>
                    </MobileNav>
                )
            }
        </NavWrapper>
    )
}






import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";



const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    right: 0;
    background-color: ${props=> props.theme.primary.dark};
    justify-content: space-between;
    padding: 25px 50px;

    > span {
        display: none;
        color: ${props=> props.theme.secondary.main};
        font-size: 1.5rem;
        cursor: pointer;
        @media screen and (max-width: 990px){
            display: flex;
        }
    }
`;


const MobileNavItem = styled.li`
    line-height: 2;
    padding: 10px 20px;
     > a {
        color: ${props=> props.theme.secondary.main};
        font-size: 1.25rem;
        font-weight: 600;
        transition: all 0.5s ease-out;

        &:hover {
            color: ${props=> props.theme.info.main};
            font-weight: 700;
            scale: 1.1;
        }
     }
`;

const MobileNav = styled.div`
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    background-color: ${props=> props.theme.primary.darker};
    list-style-type: none;
    transition: all 0.5s ease-out;
    padding: 10px;
    display: none;

    > button {
        cursor: pointer;
        background-color: ${props => props.theme.info.main};
        border: none;
        font-weight: 600;
        padding: 10px 40px;
        border-radius: 8px;
        font-size: 1.1rem;
        margin-left: 20px;
        transition: all 0.8s ease-out;
    }

    @media screen and (max-width: 990px){
        display: block;
    }
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    list-style: none;

    > button {
        cursor: pointer;
        background-color: ${props => props.theme.info.main};
        border: none;
        font-weight: 600;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 1.1rem;
        margin-left: 20px;
        transition: all 0.8s ease-out;

        &:hover {
            scale: 1.1;
        }
    }

    @media screen and (max-width: 990px){
        display: none
    }
`;

const NavItem = styled.li`
    > a {
        color: ${props => props.theme.secondary.main};
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.8s ease-out;

        &:hover {
            color: ${props => props.theme.info.main};
            scale: 1.1;
        }
    }
`;





export default Nav;