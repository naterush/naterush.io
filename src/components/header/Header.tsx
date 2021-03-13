import React from 'react';
import './Header.css'
import Logo from "../logo/Logo";

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <Logo/>
        </div>
        <div className='links'>
          <div>
              HOME
          </div>
          <div>
              BLOG
          </div>
        </div>
    </div>
  );
}

export default Header;
