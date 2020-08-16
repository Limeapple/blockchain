import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Main from './itemList/Main'
import SellerPage from './component/seller/SellerPage'
import HelpContact from './component/HelpContact'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div style ={container}>
        <Route exact path='/' component={Sidebar}/>
        <Route exact path='/' component={Main}/>
      </div>
        <Route exact path='/sell' component={SellerPage}/>
        <Route exact path='/helpandcontact' component={HelpContact}/>
    </div>
    </BrowserRouter>

  );
}
const container = {
  display:'flex',
  height:"100%"
}

export default App;
