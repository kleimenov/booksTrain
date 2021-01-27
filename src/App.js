import React, { useState, useEffect } from 'react'
//import components
import Nav from './components/HeaderComponents/Nav'




function App() {

  return (
    <div className='App'>
      <div className='header'>
        <Nav />
      </div>
      <div className='contianer'>
        <h1>Hello booksTrain!</h1>  
      </div>
    </div>
      
  );
}

export default App;


