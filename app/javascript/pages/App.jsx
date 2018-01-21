import React, { Component } from 'react';
//import { Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import ChartList from './ChartList';
import ChartDetails from './ChartDetails';
import ChartForm from './ChartForm';
import Home from './Home';
import MedicationDetail from './MedicationDetail';
import MedicationList from './MedicationList';
import UserProfile from './UserProfile';
import Import from './Import';
import NotFound from './NotFound';




export default class App extends React.Component {
constructor(props) {
  super(props);


}

  render() {
    return (
      <div>
      <Header/>
      <Aside/>
      <Navbar/>
      <h1>Main App page!</h1>
      <Home/>
      <ChartList/>
      <ChartDetails/>
      <ChartForm/>
      <MedicationDetail/>
      <MedicationList/>
      <UserProfile/>
      <Import/>
      <NotFound/>
      <Footer/>
      </div>
    );
  }
}
