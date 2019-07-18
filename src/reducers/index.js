import { combineReducers } from 'redux';
import searchReducer from './search';
import weatherReducer from './weather';

export default combineReducers({
  search: searchReducer,
  weather: weatherReducer,
});
