import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    weatherSearch: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    if (this.state.text !== '') {
      this.props.weatherSearch(this.state.text);
      this.setState({ text: '' });
    }

    e.preventDefault();
  };

  onChange = (e) => this.setState({ text: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='City...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
