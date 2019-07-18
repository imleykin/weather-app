import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import './SearchBar.scss';
import {
  requstSuggestions,
  updateSearchQuery,
  clearSuggestions,
} from '../actions/search';

import { requestWeather } from '../actions/weather';

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => <div>{suggestion}</div>;

class SearchBar extends React.Component {
  onChange = (event, { newValue }) => {
    this.props.updateSearchQuery(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.requstSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.clearSuggestions();
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { query } = this.props;
    this.props.requestWeather(query);
  };

  render() {
    const { query, suggestions } = this.props;

    const inputProps = {
      placeholder: 'Type a city',
      value: query,
      onChange: this.onChange,
    };

    return (
      <div className="container">
        <form
          className="app__search app-search"
          onSubmit={this.handleSearchSubmit}
        >
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />

          <button type="submit" className="btn btn-primary app-search__button">
            Show weather
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => store.search;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requstSuggestions,
      updateSearchQuery,
      clearSuggestions,
      requestWeather,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
