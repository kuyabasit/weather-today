import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import About from './components/pages/About';

import WeatherState from './context/openWeather/WeatherState';

import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <WeatherState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Fragment>
                    <Search showAlert={showAlert} />
                    <Weather />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </WeatherState>
  );
};

export default App;
