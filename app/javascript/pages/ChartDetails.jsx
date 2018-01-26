import React from 'react';
import { Link } from 'react-router-dom';
import male from "./../../assets/images/male.png"
import "./../../assets/stylesheets/ChartDetails"
import ChartRecord from './../components/ChartRecord';


const ChartDetails = (props) => {
  console.log({'ChartDetails component loaded':props});
  return (
    <div>
      <h1> ChartDetails </h1>
        <div className="container-fluid">
          <div className="row frame">
            <div className="col-3  frameHuman">
              <div className="row frame">
                <img src={male} className="humanSmall" alt="male" />
              </div>
              <div className="row align-items-end">
                <Link to="ChartList" className="btn align-items-end btn-secondary">Back </Link>
              </div>
            </div>
            <div className="col-5 frame">
              <h2 className="title"> {props.records[1].problem}</h2>
              <p>  </p>
              <p> Date: {props.records[1].event_date}</p>
              <p> Location: {props.records[1].location} </p>
              <p> Body Part: {props.records[1].status} </p>
              <p> Status: {props.records[1].status} </p>
              <p> Provider: {props.records[1].provider} </p>
              <p> -- </p>
            </div>
            <div className="col-4 frame">
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

export default ChartDetails;
