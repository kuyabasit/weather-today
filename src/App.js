import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import axios from 'axios';

import './App.css';

export class App extends Component {
  state = {
    loading: false,
    weatherData: null,
    alert: null,
  };

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  weatherSearch = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    );

    setTimeout(() => {
      this.setState({ loading: null });
      this.showAlert('City Not Found', 'danger');
    }, 5000);

    this.setState({ weatherData: res.data, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            weatherSearch={this.weatherSearch}
            showAlert={this.showAlert}
          />
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
