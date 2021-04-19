import React, { useEffect } from 'react';
import HomePage from "./components/Home";
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
