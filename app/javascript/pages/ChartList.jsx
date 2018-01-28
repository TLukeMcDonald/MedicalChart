import React from 'react';
import ChartRecord from './../components/ChartRecord';
import Aside from '../components/Aside';
import ErrorBoundary from './../components/ErrorBoundary';
import CircleChart from './../components/CircleChart';
import SliderBar from './../components/SliderBar';
import "./../../assets/stylesheets/ChartList"
import male from "./../../assets/images/male.png"

const ChartList = (props) => {
  console.log({'ChartList component loaded':props});
  return (
    <div className="chartlist">
        <div className="container-fluid">
          <div className="row">
          <div className="col col-1">
            <Aside/>
          </div>
          <div className="col-8 mainFrame">
            <h1> ChartList </h1>
            <p> Here is your chart </p>

          <ErrorBoundary>
            <CircleChart data={props.chartsAnalytics} size={[500,500]} color={['','red','','','','','','']} scale={[1,1.2,1,1,1,1,1,1]}/>
          </ErrorBoundary>

          <ErrorBoundary>
            <SliderBar data={[5,10,1,3]} size={[500,500]} />
          </ErrorBoundary>


          </div>
          <div className="col-2-fluid">
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

