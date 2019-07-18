const initialState = {
  query: '',
  suggestions: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY_UPDATE':
      return { ...state, query: action.payload };
    case 'SUGGESTIONS_CLEAR':
      return { ...state, suggestions: [] };
    case 'SUGGESTIONS_UPDATE':
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
