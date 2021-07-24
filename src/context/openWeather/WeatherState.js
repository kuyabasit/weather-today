import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import { WEATHER_SEARCH } from '../types';

const WeatherState = (props) => {
  const initialState = {
    weatherData: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Search Weather

  return (
    <WeatherContext.Provider
      value={{
        weatherData: state.weatherData,
        loading: state.loading,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
