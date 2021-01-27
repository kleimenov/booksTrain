import React, { useState } from 'react'
//import components
import MockFunction from './components/Example'
import Nav from './components/Nav'



function App() {

  return (
    <div className='App'>
      <div className='header'>
        <Nav />
      </div>
      <div className='contianer'>
        <h1>Hello booksTrain!</h1>  
        <MockFunction />
      </div>
    </div>
      
  );
}

export default App;


