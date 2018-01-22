import React from 'react';
import "./../../assets/stylesheets/aside"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Aside = (props) => {
  console.log('Aside component loaded');


  return (

    <div>
      <h1> Aside </h1>



            <div class="sidebar" id="sidebar">
            <button id="b1">OPEN</button>
            <button id="b2">CLOSE</button>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Article</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

        <div class="wrapper">

        </div>
    </div>
  );
};

export default Aside;
