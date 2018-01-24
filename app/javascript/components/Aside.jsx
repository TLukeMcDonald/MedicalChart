import React from 'react';
import "./../../assets/stylesheets/aside"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Arrow from "./../../assets/images/double-right.svg"

const Aside = (props) => {
console.log('Aside component loaded');

  return (
    <div className="sidebar bg-light" id="sidebar">

      <div className="bg-light b1">
        <img className="arrow" src={Arrow} alt=">" />
      </div>

      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Select All
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Head
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Arms
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Back
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Torso
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Legs
        </label>
      </div>
      <div className="form-check filterframe">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Internal
        </label>
      </div>
    </div>

  );
};

export default Aside;
