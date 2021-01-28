import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import components
import Header from './components/Headercomponents/Header'
import User from './components/Maincomponents/User'
import Footer from './components/Footercomponents/Footer'
import Homepage from './components/Maincomponents/Homepage'
import Loginform from './components/Maincomponents/Loginform'
import Registrationform from './components/Maincomponents/Registrationform'


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

  /*

        {usersData.map(user => (
          <User userName={user.first_name} key={user.id} />
        ))}
  */
  
  return (
    <Router>
        <div className='App'>
        <div className='header'>
          <Header />
        </div>
        <div className='contianer'>
          <switch>
            <Route path='/' exact component={ Homepage }/>
            <Route path='/loginform' component={ Loginform }/>
            <Route path='/registrationform' component={ Registrationform }/>
          </switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;


