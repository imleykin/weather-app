import React from 'react';
import '../style.sass';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';
import Weather from '../containers/Weather';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route path="/:city" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;
