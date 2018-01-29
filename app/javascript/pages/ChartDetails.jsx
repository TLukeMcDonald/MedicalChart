import React from 'react';
import { Link } from 'react-router-dom';
import male from "./../../assets/images/male.png"
import "./../../assets/stylesheets/ChartDetails"
import ChartRecord from './../components/ChartRecord';
import ErrorBoundary from './../components/ErrorBoundary';
import CircleChart from './../components/CircleChart';


const ChartDetails = (props) => {
  console.log({'ChartDetails component loaded':props});
  return (
    <div>
      <h1 className='title'> {props.dataSingle[0].problem} </h1>
        <div className="container-fluid">
          <div className="row frame">
            <div className="col-3  frameHuman">
              <div className="row frame">
                <img src={male} className="humanSmall" alt="male" />
             {/*   <ErrorBoundary>
                  <CircleChart data={props.data.chartsAnalytics} size={[200,200]} color={props.data.chartColor} scale={props.data.chartScale}/>
                </ErrorBoundary>
             */}
              </div>
              <div className="row align-items-end">
                <Link to="ChartList" className="btn align-items-end btn-secondary">Back </Link>
              </div>
            </div>
            <div className="col-5 frame">
             {/* <h2 className="title"> {props.dataSingle[0].problem}</h2> */}
              <p>  </p>
              <p> Date: {props.dataSingle[0].event_date}</p>
              <p> Location: {props.dataSingle[0].location} </p>
              <p> Body Part: {props.dataSingle[0].b_part} </p>
              <p> Status: {props.dataSingle[0].status} </p>
              <p> Provider: {props.dataSingle[0].provider} </p><br />
              <p> Comments: </p><p> {props.dataSingle[0].comments} </p>
            </div>
            <div className="col-4 frame">
              <div className="record">

              {props.data.chartsData.map( record => (
                <ChartRecord
                  key={record.id}
                  record={record}
                  setCurrentRecord={props.setCurrentRecord}
                  />
                ))}



            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChartDetails;
