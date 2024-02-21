const Logo = () => {
    return (
        <LogoWrapper>
            <a href="#">PrimeHorizon</a>
        </LogoWrapper>
    )
}



import styled from "styled-components";


const LogoWrapper = styled.div`
    > a {
        color: ${props => props.theme.secondary.main};
        font-weight: 800;
        font-size: 1.2rem;
    }
`;


export default Logo;