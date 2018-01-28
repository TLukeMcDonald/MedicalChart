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
      chartsAnalytics: null,
      analyticsLoaded: false,
    }
    this.getCharts=this.getCharts.bind(this);
    this.getChartAnalytics= this.getChartAnalytics.bind(this);
}


componentDidMount() {
  console.log('componentDidMount');
  this.getCharts(this.state.chartsLoaded);
  this.getChartAnalytics()
}

componentDidUpdate() {
  console.log('update');
  {!(this.state.analyticsLoaded) ? (this.getChartAnalytics()) : console.log('no change')}
}



getCharts() {
  console.log({'before chartsData': this.state.chartsData})
  // debugger;
  fetch('/records')
  .then(res => res.json())
  .then((res) => {
    this.setState({
        chartsData: res.data.records,
        chartsLoaded: true,
        analyticsLoaded: false,
      })
      console.log({'res':res})
      console.log({'after chartsData': this.state.chartsData});
      console.log({'state after chartsData': this.state});
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
    console.log({'after Analytics':this.state.chartsAnalytics});
}



  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/Main" render={props => (<Main {...props}/*locationsList={this.state.locationsData}*/ /> )}
            exact />


  {/* Chart List-  If api Charts data has returned chart list component is rendered */}
          {(this.state.chartsLoaded)
          ? <Route
              path="/ChartList"
              render={props => (<ChartList
                {...props}
                records={this.state.chartsData}
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
                records={this.state.chartsData}
              />
            )}
            exact
          />
          : <p> Loading... </p> }


          <Route path="/ChartForm" component={ChartForm}/>
          <Route path="/MedicationList" component={MedicationList}/>
          <Route path="/MedicationDetail" component={MedicationDetail}/>
          <Route path="/UserProfile" component={UserProfile}/>
          <Route path="/Import" component={Import}/>

{/* Not Found-  If no good path is found then this is rendered */}
          {(this.state.chartsLoaded) & (this.state.analyticsLoaded)
          ? <Route
              path="/"
              render={props => (<NotFound
                {...props}
                records={this.state.chartsData}
                chartsAnalytics={this.state.chartsAnalytics}
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
