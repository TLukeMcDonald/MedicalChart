import React from 'react';
import MedicationSmall from './../components/MedicationSmall';
import "./../../assets/stylesheets/MedicationList"

const MedicationList = (props) => {
  console.log('MedicationList component loaded');
  return (
    <div>
      <h1 className="text-center"> Medications </h1>
        <div className="card-deck justify-content-center">
          <MedicationSmall />
          <MedicationSmall />
          <MedicationSmall />
          <MedicationSmall />
          <MedicationSmall />
          <MedicationSmall />



        </div>
    </div>
  );
};

export default MedicationList;
