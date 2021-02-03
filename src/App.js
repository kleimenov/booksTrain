import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import components
import Header from "./components/Headercomponents/Header";
//import User from "./components/Maincomponents/User";
import Footer from "./components/Footercomponents/Footer";
import Homepage from "./components/Maincomponents/Homepage";
import Loginform from "./components/Maincomponents/Loginform";
import Registrationform from "./components/Maincomponents/Registrationform";
import Welcome from "./test";
import { propTypes } from "react-bootstrap/esm/Image";

function App() {
  const [token, setToken] = useState();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getAllUsersFromDatabase();
  }, []);

  const getAllUsersFromDatabase = async () => {
    const response = await fetch("http://localhost:3002");
    const data = await response.json();
    //console.log(data)
    setUsersData(data);
  };



  console.log('Token is ' +token)

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
          <Welcome />
        </div>
        <div className="contianer">
          <Switch>
            <Route path="/" exact>
              {usersData.map((user) => (
                <Homepage userName={user.first_name} key={user.id} />
              ))}
            </Route>
            <Route path="/loginform" component={Loginform} token={ token }/>
            <Route path="/registrationform" component={Registrationform} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
