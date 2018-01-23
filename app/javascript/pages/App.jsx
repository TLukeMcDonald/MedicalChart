import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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


export default class App extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      chartsData: null,
      chartsLoaded: false,
    }
    this.getCharts=this.getCharts.bind(this);
}


componentDidMount() {
  console.log('componentDidMount');
  this.getCharts();
}

getCharts() {
  console.log({'chartsData': this.state.chartsData})
  fetch(`/`)
  // .then((res) => {
     // { debugger; }
    // return res.json() })
    // .then(res => res.json())
    .then(res => {
      // console.log(res);
      this.setState({
        chartsData: res,
        chartsLoaded: true,
      })
      console.log({'chartsData': this.state.chartsData});
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/Main" render={props => (<Main {...props}/*locationsList={this.state.locationsData}*/ /> )}
            exact />

          <Route path="/ChartList" component={ChartList}/>
          <Route path="/ChartDetails" component={ChartDetails}/>
          <Route path="/ChartForm" component={ChartForm}/>
          <Route path="/MedicationList" component={MedicationList}/>
          <Route path="/MedicationDetail" component={MedicationDetail}/>
          <Route path="/UserProfile" component={UserProfile}/>
          <Route path="/Import" component={Import}/>
          <Route path="/" component={NotFound}/>
      </Switch>


        <Footer/>
      </div>
    );
  }
}
