import { WEATHER_SEARCH, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case WEATHER_SEARCH:
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
