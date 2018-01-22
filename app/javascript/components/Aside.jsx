import React from 'react';
import "./../../assets/stylesheets/aside"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Aside = (props) => {
  console.log('Aside component loaded');

    let page = this.props.location.pathname.substr(1);
    if (!page) page = 'home';


  return (

    <div>
      <h1> Aside </h1>
     <div>
       <ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <BackgroundImage page={page} key={page} />
        </ReactCSSTransitionGroup>
      </div>


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
