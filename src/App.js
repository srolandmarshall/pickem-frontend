import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
export default class App extends Component {
  render() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/search" component={SearchPage} exact={true} />
      <Route component={NotFoundPage} />
     </Switch>
   </BrowserRouter>
   )
 }
}