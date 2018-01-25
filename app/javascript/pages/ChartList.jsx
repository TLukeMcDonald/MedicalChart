import React from 'react';
import ChartRecord from './../components/ChartRecord';
import Aside from '../components/Aside';
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
          <div className="col-6 mainFrame">
            <h1> ChartList </h1>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. </p>
            <img src={male} className="human" alt="male" />

          </div>
          <div className="col-4">
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

