import searchReducer, { initialState } from '../reducers/search';

describe('search reducer', () => {
  it('SEARCH_QUERY_UPDATE', () => {
    const query = 'Moscow';

    const action = {
      type: 'SEARCH_QUERY_UPDATE',
      payload: query,
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      query,
    })
  })

  it('SUGGESTIONS_CLEAR', () => {
    const initialState = {
      query: 'Some query',
      suggestions: [1, 2, 3],
    }

    const action = {
      type: 'SUGGESTIONS_CLEAR',
      payload: [],
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      suggestions: [],
    })
  })


  it('SUGGESTIONS_UPDATE', () => {
    const initialState = {
      query: 'Some query',
      suggestions: [1, 2, 3],
    }

    const newSuggestions = [1, 2, 3, 4, 5];

    const action = {
      type: 'SUGGESTIONS_UPDATE',
      payload: newSuggestions,
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      suggestions: newSuggestions,
    })
  })
});
