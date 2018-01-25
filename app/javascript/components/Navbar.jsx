import React from 'react';
import Crest from '../components/Crest';
import "./../../assets/stylesheets/crest"


const Navbar = (props) => {
console.log('Navbar component loaded');
return (
  <div>

      <nav className="navbarReduce navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav container col-md-3 ml-auto">
          <NavLink className="navbar-brand" to="/">
            <div className="d-inline-block align-top crestBug">
              <Crest/>
            </div>
           <span> MyChart</span>
          </NavLink>
        </div>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-expand-lg" id="navbarNav">
          <div className="navbar-nav container col-md-3 ml-auto">
            <NavLink activeClassName="active" className="nav-item nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="ChartList">Chart</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="ChartDetails">Record</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="MedicationList">Medicine</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="ChartForm">New</NavLink>
          </div>
            <div className="navbar-nav  col-md-3 ml-auto ">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control col-7" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary my-2 col-5 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
