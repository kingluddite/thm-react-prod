import React from 'react';

const SocialMedia = (props) => {
  return (
    <div className="social-media-container">
      <ul className="social-media">
        <li><a href="https://www.facebook.com/thehollywoodmoguls/" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
        <li><a href="https://twitter.com/thehollywoodmgl"><i className="fa fa-twitter fa-2x"></i></a></li>
        <li><a href="https://plus.google.com/u/0/116777737755769941875"><i className="fa fa-google-plus fa-2x"></i> </a></li>
        <li><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i> </a></li>
      </ul>
    </div>
  )
}

export default SocialMedia;