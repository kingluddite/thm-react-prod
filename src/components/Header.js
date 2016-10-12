import React from 'react';
import SocialMedia from './SocialMedia';

const Header = (props) => {
  return (
    <div>
    <header className="header">
     <SocialMedia />
    <p className="thm-productions">THM PRODUCTIONS PRESENTS</p>
      <img className="img-responsive logo" src="thm-black-logo.jpg" alt="The Hollywood Moguls Logo"/>
    </header>
    </div>
    )
}

export default Header;