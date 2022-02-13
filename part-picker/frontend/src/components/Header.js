import React from 'react';
import { Link } from 'react-router-dom';
import TempLogo from '../images/temporaryLogo.png';
import Styled from 'styled-components';

const Header = () => {

    return(
       <StyledHeader>
           <div className='logo'>
                <img src={TempLogo} alt='logo'/>
           </div>
           <div className='navbar'>
                <Link className = 'linkButton' to='/'>Home</Link>
                <Link className = 'linkButton' to='/about'>About Us</Link>
                <Link className = 'linkButton' to='/newbuild'>New Build</Link>
                <Link className = 'linkButton' to='/mybuilds'>My Builds</Link>
                <Link className = 'linkButton' to='/login'>Login</Link>
           </div>
       </StyledHeader>
    );
}



export default Header;

const StyledHeader = Styled.header `
    
`