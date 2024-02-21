const Nav = () => {
    const navItems = [
        {
            name: "Home",
            to: "#"
        },
        {
            name: "Why Choose Us",
            to: "#"
        },
        {
            name: "Properties",
            to: "#"
        },
        {
            name: "Our Services",
            to: "#"
        },
        {
            name: "Testimonials",
            to: "#"
        },
        {
            name: "Blog",
            to: "#"
        },
    ];
    return (
        <NavWrapper>
            <Logo />
            <NavItems>
                {
                    navItems.map(({to, name}, i) => (
                        <NavItem key={i}>
                            <a href={to}>
                                {name}
                            </a>
                        </NavItem>
                    ))
                }
                <button>Contact Us</button>
            </NavItems>
        </NavWrapper>
    )
}







import styled from "styled-components";

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