import React from 'react';
import "./../../assets/stylesheets/aside"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Aside = (props) => {
console.log('Aside component loaded');

  return (

    <div className='aside'>

      <div className="sidebar" id="sidebar">
      <button id="b1"> -></button>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Select All
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Head
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Arms
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Back
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Torso
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Legs
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Internal
        </label>
      </div>

      <div className="wrapper">
      </div>
    </div>
    </div>
  );
};

export default Aside;
