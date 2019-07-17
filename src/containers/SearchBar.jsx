import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import './SearchBar.scss';
import {
  requstSuggestions,
  updateSearchQuery,
  clearSuggestions,
} from '../actions/';

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
    console.log(this.props.query);
  };

  render() {
    const { query, suggestions } = this.props;

    const inputProps = {
      placeholder: 'Type a city',
      value: query,
      onChange: this.onChange,
    };

    return (
      <form onSubmit={this.handleSearchSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </form>
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
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
