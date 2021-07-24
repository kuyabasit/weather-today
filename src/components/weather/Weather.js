import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import WeatherContext from '../../context/openWeather/weatherContext';

const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const { loading, weatherData } = weatherContext;

  if (!weatherData) return null;

  const { sys, name, main, weather } = weatherData;

  const weatherDescription = weather[0].description;
  const weatherIcon =
    'http://openweathermap.org/img/wn/' + weather[0].icon + '@2x.png';

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='badge'>
        <h1>
          {name} {sys.country}
        </h1>
        <h2>
          Temp: {main.temp}
          <img src={weatherIcon} style={{ width: '50px' }} alt='icon'></img>
        </h2>
        <h2>Description: {weatherDescription}</h2>
      </div>
    );
  }
};
Weather.prototypes = {
  weatherData: PropTypes.array.isRequired,
};

export default Weather;
