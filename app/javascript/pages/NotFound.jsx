import React, { Component, PropTypes } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import * as d3 from "d3";
import { ReactDom, render } from 'react-dom';
// import SortableTable from 'react-sortable-table';
import ErrorBoundary from './../components/ErrorBoundary';
import BarChart from './../components/BarChart';
import CircleChart from './../components/CircleChart';
import SliderBar from './../components/SliderBar';
import SliderBar2 from './../components/SliderBar2';
import "./../../assets/stylesheets/NotFound.css"



const NotFound = (props) => {
  console.log({'NotFound component loaded': {props}});
  return (
    <div className="container-fluid">
    <h1> Not Found </h1>
    <ErrorBoundary>
      <BarChart data={props.data.chartsAnalytics} size={[200,200]} />
    </ErrorBoundary>

    <ErrorBoundary>
      <CircleChart data={props.data.chartsAnalytics} size={[500,500]} color={props.data.chartColor} scale={props.data.chartScale}/>
    </ErrorBoundary>

    <ErrorBoundary>
      <SliderBar data={[5,10,1,3]} size={[500,500]} />
    </ErrorBoundary>

    <ErrorBoundary>
      <div id="scroll"></div>
    </ErrorBoundary>

   <ErrorBoundary>
      <SliderBar2 data={[5,10,1,3]} size={[500,500]} />
    </ErrorBoundary>

    </div>
  );
};

export default NotFound;
