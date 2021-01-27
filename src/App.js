import React, { useState, useEffect } from 'react'
//import components
import Nav from './components/HeaderComponents/Nav'



function App() {

  useEffect(()=> {
    getAllUsersFromDatabase();
  }, [])

  const getAllUsersFromDatabase = async () => {
    const response = await fetch('http://localhost:3002');
    const data = await response.json();
    console.log(data)
  }
  

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


