import React, { Component, PropTypes } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import * as d3 from "d3";
import { ReactDom, render } from 'react-dom';
// import SortableTable from 'react-sortable-table';
import ErrorBoundary from './../components/ErrorBoundary';
import BarChart from './../components/BarChart';
import SliderBar from './../components/SliderBar';
import "./../../assets/stylesheets/NotFound.css"



const NotFound = (props) => {
  console.log('NotFound component loaded');
  return (
    <div>
    <h1> Not Found </h1>

    <BarChart data={[5,4,1,6,8,10,1,3]} size={[500,500]} />

    <ErrorBoundary>
      <SliderBar data={[5,10,1,3]} size={[500,500]} />
    </ErrorBoundary>

    </div>
  );
};

export default NotFound;
