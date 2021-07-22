import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  const weatherSearch = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    );

    setLoading(false);
    setWeatherData(res.data);
  };

  return (
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
                  <Search weatherSearch={weatherSearch} showAlert={showAlert} />
                  <Weather weatherData={weatherData} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
