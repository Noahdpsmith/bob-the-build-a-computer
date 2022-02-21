import React from 'react';
import { Link } from 'react-router-dom';
import TempLogo from '../images/temporaryLogo.png';
import Styled from 'styled-components';

const Header = () => {

    return(
       <StyledHeader>
           <LogoDiv>
                <StyledLogo src={TempLogo} alt='logo'/>
                {/* swap out temporary Logo for something that looks better */}
           </LogoDiv>
           <NavDiv>
                <StyledLink className = 'linkButton' to='/'>Home</StyledLink>
                <StyledLink className = 'linkButton' to='/about'>About Us</StyledLink>
                <StyledLink className = 'linkButton' to='/newbuild'>New Build</StyledLink>
                <StyledLink className = 'linkButton' to='/mybuilds'>My Builds</StyledLink>
                <StyledLink className = 'linkButton' to='/login'>Login</StyledLink>
                <Link className = 'linkButton' to='/parts'>Parts</Link>
           </NavDiv>
       </StyledHeader>
    );
}



export default Header;

const StyledHeader = Styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #282838;
    padding-left: 5vh;
    padding-right: 5vh;
`
const LogoDiv = Styled.div `
    height: 100%;
    /* width: 50%; */
    /* background-color: green; */
    display: flex;
    align-items: center;
`
const StyledLogo = Styled.img `
    height: 90%;
    aspect-ratio: 1 / 1; 
    margin-left: 1vw;
`
const NavDiv = Styled.div `
    font-size: 1.5rem;
`
const StyledLink = Styled(Link) `
    margin-right: 1.5rem;
    padding: 2px;
    &:hover {
        border-bottom: 2px solid white;
    }
`