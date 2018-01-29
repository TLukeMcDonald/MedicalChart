import React from 'react';
import ChartRecord from './../components/ChartRecord';
import Aside from '../components/Aside';
import ErrorBoundary from './../components/ErrorBoundary';
import CircleChart from './../components/CircleChart';
import SliderBar from './../components/SliderBar';
import "./../../assets/stylesheets/ChartList"
import male from "./../../assets/images/male.png"

const ChartList = (props) => {
  console.log({'ChartList':props});
  return (
    <div className="chartlist">
        <div className="container-fluid">
          <div className="row">
          <div className="col col-1">
            <Aside/>
          </div>
          <div className="col-7 mainFrame">
            <h1> ChartList </h1>


          <ErrorBoundary>
            <CircleChart data={props.data.chartsAnalytics} size={[500,500]} color={props.data.chartColor} scale={props.data.chartScale}/>
          </ErrorBoundary>

          <ErrorBoundary>
            <SliderBar data={props.data} size={[150,500]} />
          </ErrorBoundary>


          </div>
          <div className="col-3-fluid">
            <div className="record">


              {props.records.map( record => (
                <ChartRecord
                  key={record.id}
                  record={record}
                  />
                ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartList;

