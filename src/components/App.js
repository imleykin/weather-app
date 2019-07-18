import React from 'react';
import '../style.sass';
import SearchBar from '../containers/SearchBar';
import Weather from '../containers/Weather';

function App() {
  return (
    <div className="app">
      <SearchBar /> <Weather />
    </div>
  );
}

export default App;
