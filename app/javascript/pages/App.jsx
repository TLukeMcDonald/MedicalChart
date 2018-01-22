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

         { /*
        <Main/>
        <div className="crest">
          <Crest/>
        </div>
        <ChartList/>
        <ChartDetails/>
        <ChartForm/>
        <MedicationDetail/>
        <MedicationList/>
        <UserProfile/>

        <Import/>
        <NotFound/> */ }
        <Footer/>
      </div>
    );
  }
}
