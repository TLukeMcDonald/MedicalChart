import React from 'react';
import "./../../assets/stylesheets/Footer"

const Footer = (props) => {
  console.log('Footer component loaded');
  return (
      <nav class="footer navbar fixed-bottom navbar-light bg-light">
        <p className="footer container navbar-text justify-content-center"> Made by: Luke McDonald, TLM CONSULTING</p>
      </nav>
  );
};

export default Footer;

