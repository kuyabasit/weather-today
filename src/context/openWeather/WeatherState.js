import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import { WEATHER_SEARCH, SET_LOADING } from '../types';

const WeatherState = (props) => {
  const initialState = {
    weatherData: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Search Weather

  const weatherSearch = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    );

    dispatch({
      type: WEATHER_SEARCH,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        weatherData: state.weatherData,
        loading: state.loading,
        weatherSearch,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
