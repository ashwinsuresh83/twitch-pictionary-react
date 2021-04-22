import React, { useEffect } from 'react';
import HomePage from "./components/Home";
import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
        <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/game/:twitch__name" component={Game}/>
          
        </Switch>
    </Router>
  );
}

export default App;
