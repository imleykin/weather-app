const initialStore = {
  query: '',
  suggestions: [],
};

const searchReducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY_UPDATE':
      return { ...store, query: action.payload };
    case 'SUGGESTIONS_CLEAR':
      return { ...store, suggestions: [] };
    case 'SUGGESTIONS_UPDATE':
      return { ...store, suggestions: action.payload };
    default:
      return store;
  }
};

export default searchReducer;
