import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import About from './components/pages/About';

import WeatherState from './context/openWeather/WeatherState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <WeatherState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Fragment>
                      <Search />
                      <Weather />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </WeatherState>
  );
};

export default App;
