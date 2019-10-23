import React from 'react'
import { shallow, render } from 'enzyme'
import { SearchBar } from '../containers/SearchBar'

describe('SearchBar', () => {
  const props = {
    query: '',
    suggestions: [],
    requstSuggestions: () => {},
    updateSearchQuery: () => {},
    clearSuggestions: () => {},
    requestWeather: () => {},
  }

  it ('Button is rendered', () => {
    const searchBar = shallow(<SearchBar {...props} />)
    expect(searchBar.find('button')).toHaveLength(1);
  })

  it ('Button text is Show weather', () => {
    const searchBar = shallow(<SearchBar {...props} />)
    expect(searchBar.find('button').text()).toEqual('Show weather');
  })

  it ('Form is rendered', () => {
    const searchBar = shallow(<SearchBar {...props} />)
    expect(searchBar.find('form')).toHaveLength(1);
  })
})
