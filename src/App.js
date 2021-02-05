import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import components
import Header from "./components/Headercomponents/Header";
//import User from "./components/Maincomponents/User";
import Footer from "./components/Footercomponents/Footer";
import Homepage from "./components/Maincomponents/Homepage";
import Loginform from "./components/Maincomponents/Loginform";
import Registrationform from "./components/Maincomponents/Registrationform";
import Welcome from "./components/Maincomponents/Testcomp";
import { propTypes } from "react-bootstrap/esm/Image";
import { text } from "body-parser";

function App() {
  const [token, setToken] = useState();
  const [usersData, setUsersData] = useState([]);
  const [redirectionState, setRedirection] = useState(false)

  useEffect(() => {
    getAllUsersFromDatabase();
  }, []);

  const getAllUsersFromDatabase = async () => {
    const response = await fetch("http://localhost:3002");
    const data = await response.json();
    //console.log(data)
    setUsersData(data);
  };
  console.log("App component = Token is " + token);
  console.log("App component = Redirection is " + redirectionState);

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
            <Route
              path="/loginform"
              render={(props) => <Loginform {...props} setToken={ setToken } setRedirection={ setRedirection } />}
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

export default App;
