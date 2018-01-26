import React, { Component, PropTypes } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import * as d3 from "d3";
import { ReactDom, render } from 'react-dom';
import SortableTable from 'react-sortable-table';
import BarChart from './../components/BarChart';
import "./../../assets/stylesheets/NotFound.css"



const NotFound = (props) => {
  console.log('NotFound component loaded');
  return (
    <div>
    <h1> Not Found </h1>

    <BarChart/>

    </div>
  );
};

export default NotFound;
