import React from 'react';
import Crest from '../components/Crest';
import "./../../assets/stylesheets/crest"


const Navbar = (props) => {
console.log('Navbar component loaded');
return (
  <div>

      <nav className="navbarReduce navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav container col-md-3 ml-auto">
          <a className="navbar-brand" href="home#index">
            <div className="d-inline-block align-top crestBug">
              <Crest/>
            </div>
           <span> MyChart</span>
          </a>
        </div>


        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-expand-lg" id="navbarNav">
          <div class="navbar-nav container col-md-3 ml-auto">
            <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Body</a>
            <a class="nav-item nav-link" href="#">Record</a>
            <a class="nav-item nav-link" href="#">Medicine</a>
            <a class="nav-item nav-link" href="#">New</a>
          </div>
            <div class="navbar-nav  col-md-3 ml-auto ">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control col-7" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 col-5 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
