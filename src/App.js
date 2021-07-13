import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import axios from 'axios';

import './App.css';

export class App extends Component {
  state = {
    loading: false,
    weatherData: null,
  };

  weatherSearch = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    );

    this.setState({ weatherData: res.data, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search weatherSearch={this.weatherSearch} />
          <Weather
            weatherData={this.state.weatherData}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
