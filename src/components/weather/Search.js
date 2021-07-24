import React, { useState, useContext } from 'react';
import WeatherContext from '../../context/openWeather/weatherContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const weatherContext = useContext(WeatherContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    if (text === '') {
      alertContext.showAlert('Please Enter a place', 'danger');
    } else {
      weatherContext.weatherSearch(text);
      setText('');
    }
    e.preventDefault();
  };

  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='City...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
