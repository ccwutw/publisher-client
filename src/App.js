import React, { Component } from 'react';
import Listing from './components/listing'
import New from './components/new'
import Detail from './components/detail'
import Header from './components/header'
import { BrowserRouter, Route } from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
        <Header />
        <Route path='/listing' component={Listing} />
        <Route path='/new' component={New} />
        <Route path='/detail/:isbn' component={Detail} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
