// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MovieDetails from './Component/MovieDetails';
import MovieList from './Component/MovieList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
