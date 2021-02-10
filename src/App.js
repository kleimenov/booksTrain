import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Redirect } from "react-router-dom";
//import components
import Header from "./components/Headercomponents/Header";
import Footer from "./components/Footercomponents/Footer";
import Homepage from "./components/Maincomponents/Homepage";
import Loginform from "./components/Maincomponents/Loginform";
import Registrationform from "./components/Maincomponents/Registrationform";
import Allbooks from "./components/Maincomponents/Allbooks"
import Welcome from "./components/Maincomponents/Testcomp";
import { propTypes } from "react-bootstrap/esm/Image";
import { text } from "body-parser";

function App() {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //getAllUsersFromDatabase();
  }, []);

  //it is test of connection with server
  /*
  const getAllUsersFromDatabase = async () => {
    const response = await fetch("http://localhost:3002");
    const data = await response.json();
    //console.log(data)
  };
*/
  

  if (!token) {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <Header token={token} setToken={setToken} />
          </div>
          <div className="contianer">
            <Switch>
              <Route path="/" exact>
                <Homepage token={token} setToken={setToken} />
              </Route>
              <Route
                path="/loginform"
                render={(props) => (
                  <Loginform
                    {...props}
                    setToken={setToken}
                    setUserData={setUserData}
                  />
                )}
              />
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
  return (
    <Router>
      <Redirect to="/" />
      <div className="App">
        <div className="header">
          <Header token={token} />
        </div>
        <div className="contianer">
          <Switch>
            <Route path="/" exact>
              <Homepage 
                userName={userData[0].first_name}
                key={userData[0].id}
                token={token}
              />
            </Route>
            <Route path="/allbooks" component={Allbooks} />
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
