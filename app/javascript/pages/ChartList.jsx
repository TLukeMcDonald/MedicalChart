import React from 'react';
import ChartRecord from './../components/ChartRecord';
import "./../../assets/stylesheets/ChartList"

const ChartList = (props) => {
  console.log('ChartList component loaded');
  return (
    <div className="chartlist">
        <div className="container">
      <div className="row">
          <div className="col ">
            <h1> ChartList </h1>
          </div>
          <div className="col ">
            <ChartRecord/>
            <ChartRecord/>
            <ChartRecord/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartList;
