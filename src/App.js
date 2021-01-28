import React, { useState, useEffect } from 'react'
//import components
import Header from './components/HeaderComponents/Header'
import User from './components/MainComponents/User'



function App() {

  const [usersData, setUsersData] = useState([])
  
  useEffect(()=> {
    getAllUsersFromDatabase();
  }, [])

  const getAllUsersFromDatabase = async () => {
    const response = await fetch('http://localhost:3002');
    const data = await response.json();
    //console.log(data)
    setUsersData(data)
  }
  
  
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='contianer'>
        <h1>Hello booksTrain!</h1>
        {usersData.map(user => (
          <User userName={user.first_name} key={user.id} />
        ))}
      </div>
    </div>
      
  );
}

export default App;


