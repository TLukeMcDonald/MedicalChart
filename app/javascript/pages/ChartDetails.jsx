import React from 'react';
import male from "./../../assets/images/male.png"
import "./../../assets/stylesheets/ChartDetails"
import ChartRecord from './../components/ChartRecord';


const ChartDetails = (props) => {
  console.log('ChartDetails component loaded');
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
                <button className="btn align-items-end btn-secondary">Back </button>
              </div>
            </div>
            <div className="col-5 frame">
              <h2 className="title"> Title </h2>
              <p className=""> Back pain (SCT 161891005) </p>
              <p> 13 Jan 2016 @ 1200 </p>
              <p> VA New York Harbor HCS </p>
              <p> ACTIVE </p>
              <p> PLAGEMAN,DEBORAH S </p>
              <p> -- </p>
            </div>
            <div className="col-4 frame">
                          <div className="record">
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
              <ChartRecord problem='Lower back pain' date='01/01/2000' status='Finished Treatment'/>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChartDetails;
