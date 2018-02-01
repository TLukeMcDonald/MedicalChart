import React, { Component, PropTypes } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import ChartList from './ChartList';
import ChartDetails from './ChartDetails';
import ChartForm from './ChartForm';
import Main from './Main';
import MedicationDetail from './MedicationDetail';
import MedicationList from './MedicationList';
import UserProfile from './UserProfile';
import Import from './Import';
import NotFound from './NotFound';
import Crest from '../components/Crest';
import "./../../assets/stylesheets/crest"
import * as d3 from "d3";
import { render } from 'react-dom';
// import SortableTable from 'react-sortable-table';
import BarChart from '../components/BarChart';

export default class App extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      chartsData: null,
      chartsLoaded: false,
      currentChart: 1,
      chartsAnalytics: null,
      chartColor: ['red','red','yellow','','','',''],
      chartScale: [1,2,1,1,1,1,1],
      analyticsLoaded: false,
      medicationsData: null,
      medicationsLoaded: false,
      currentMed: 1,
    }
    this.getCharts=this.getCharts.bind(this);
    this.getChartAnalytics= this.getChartAnalytics.bind(this);
    this.getMedications= this.getMedications.bind(this);
    this.getSingleRecord=this.getSingleRecord.bind(this);
    this.setCurrentRecord=this.setCurrentRecord.bind(this);
}


componentDidMount() {
  console.log('componentDidMount');
  this.getCharts(this.state.chartsLoaded);
  this.getChartAnalytics()
  this.getMedications()
}

componentDidUpdate() {
  console.log('update');
  {!(this.state.analyticsLoaded) ? (this.getChartAnalytics()) : console.log('no change')}
}



getCharts() {
  // console.log({'before chartsData': this.state.chartsData})
  // debugger;
  fetch('/records')
  .then(res => res.json())
  .then((res) => {
    this.setState({
        chartsData: res.data.records,
        chartsLoaded: true,
        analyticsLoaded: false,
      })
      // console.log({'res':res})
      // console.log({'after chartsData': this.state.chartsData});
      // console.log({'state after chartsData': this.state});
    })
    .catch(err => console.log(err))
  }

getMedications() {
  console.log({'before medicationsData': this.state.medicationsData})
  // debugger;
  fetch('/medications')
  .then(res => res.json())
  .then((res) => {
    this.setState({
        medicationsData: res.data.medications,
        medicationsLoaded: true,
      })
      // console.log({'res':res})
      // console.log({'after medicationsData': this.state.medicationsData});
      // console.log({'state after medicationsData': this.state});
    })
    .catch(err => console.log(err))
  }


getChartAnalytics() {
  let countHead;
  let countArm;
  let countChest;
  let countBack;
  let countLowerBack;
  let countLeg;
  let countInternal;

  console.log({'getChartAnalytics': this.state});
  console.log(this.state.chartsLoaded)
  {(this.state.chartsLoaded) & (!this.state.analyticsLoaded)  ? (
  countHead = this.state.chartsData.filter(record => (record.b_part == 1)).length,
  countArm = this.state.chartsData.filter(record => (record.b_part == 2)).length,
  countChest = this.state.chartsData.filter(record => (record.b_part == 3)).length,
  countBack = this.state.chartsData.filter(record => (record.b_part == 4)).length,
  countLowerBack = this.state.chartsData.filter(record => (record.b_part == 5)).length,
  countLeg = this.state.chartsData.filter(record => (record.b_part == 6)).length,
  countInternal = this.state.chartsData.filter(record => (record.b_part == 7)).length,

  console.log([countHead,countArm,countChest,countBack,countLowerBack,countLeg,countInternal]),
  this.setState({
    chartsAnalytics:[countHead,countArm,countChest,countBack,countLowerBack,countLeg,countInternal],
    analyticsLoaded: true,
  })

  )
          : <p> Loading... </p>
  }
    // console.log({'after Analytics':this.state.chartsAnalytics});
}


  getSingleRecord(record) {
    return record.id === this.state.currentChart;
    console.log(this.state.chartsData.find(getSingleRecord));
  }

  setCurrentRecord(id) {
    this.setState({
      currentChart: id,
      })
  }



  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/Main" render={props => (<Main {...props}/*locationsList={this.state.locationsData}*/ /> )}
            exact />


  {/* Chart List-  If api Medications data has returned chart list component is rendered */}
          {(this.state.chartsLoaded)
          ? <Route
              path="/ChartList"
              render={props => (<ChartList
                {...props}
                records={this.state.chartsData}
                data={this.state}
                setCurrentRecord={this.setCurrentRecord}
              />
            )}
            exact
          />
          : <p> Loading... </p> }

{/* Chart Details-  If api Charts data has returned chart list component is rendered */}
          {(this.state.chartsLoaded)
          ? <Route
              path="/ChartDetails"
              render={props => (<ChartDetails
                {...props}
                data={this.state}
                dataSingle={this.state.chartsData.filter(this.getSingleRecord)}
                setCurrentRecord={this.setCurrentRecord}
              />
            )}
            exact
          />
          : <p> Loading... </p> }


          <Route path="/ChartForm" component={ChartForm}/>

{/* Chart Form-  If api Charts data has returned chart form component is rendered */}
          {(this.state.chartsLoaded)
          ? <Route
              path="/ChartForm"
              render={props => (<ChartForm
                {...props}
                data={this.state.chartsData.filter(this.getSingleRecord)}
                setCurrentRecord={this.setCurrentRecord}
                isadd={false}
              />
            )}
            exact
          />
          : <p> Loading... </p> }





{/* Medication List-  If api medicaitons data has returned medication list component is rendered  */}
          {(this.state.medicationsLoaded)
          ? <Route
              path="/MedicationList"
              render={props => (<MedicationList
                {...props}
                meds={this.state.medicationsData}
              />
            )}
          />
          : <p> Loading... </p> }





{/* Medication Detail-  If api medicaitons data has returned medication individual component is rendered  */}
          {(this.state.medicationsLoaded)
          ? <Route
              path="/MedicationDetail"
              render={props => (<MedicationDetail
                {...props}
                med={this.state.medicationsData[`${this.state.currentMed}`]}
              />
            )}
          />
          : <p> Loading... </p> }




          <Route path="/UserProfile" component={UserProfile}/>
          <Route path="/Import" component={Import}/>

{/* Not Found-  If no good path is found then this is rendered */}
          {(this.state.chartsLoaded) & (this.state.analyticsLoaded)
          ? <Route
              path="/"
              render={props => (<NotFound
                {...props}
                records={this.state.chartsData}
                data={this.state}
              />
            )}
          />
          : <p> Loading... </p> }

      </Switch>


        <Footer/>
      </div>
    );
  }
}
