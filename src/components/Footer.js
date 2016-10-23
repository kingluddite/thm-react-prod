import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>Tickets $10 available at the door. Seating is limited.</p>
  <p>This is a charity event. All proceeds go to <a href="https://stvincentmow.org/" target="_blank">St. Vincent{`'`}s Meals On Wheels for the Homeless</a>.</p>
  <a href="https://stvincentmow.org/" target="_blank"><img src="logo-svmow.png" alt="Meals On Wheels Logo" /></a>
  <SocialMedia />
  <p>Email All Questions To: thehollywoodmoguls@gmail.com</p>
    </footer>
    )
}

export default Footer;