import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showAlert, weatherSearch }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    if (text === '') {
      showAlert('Please Enter a place', 'danger');
    } else {
      weatherSearch(text);
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

Search.propTypes = {
  weatherSearch: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
