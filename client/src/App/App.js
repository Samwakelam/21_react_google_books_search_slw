import React from 'react';
import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

// pages
import SearchPage from '../pages/SearchPage';
import SavedPage from '../pages/SavedPage';

function App() {
  return (
    <main className="App">
      <Router basename='/'>
        <header>
        <NavLink to='/'>
          <button className='btn-icon'>
            <img 
              id='search-icon' 
              className='icon' 
              src={`${process.env.PUBLIC_URL}/assets/search-icon.png`} 
              alt='search icon' 
            />
          </button>
        </NavLink>
        <NavLink to='/saved'>
          <button className='btn-icon'>
            <img 
              id='save-icon' 
              className='icon' 
              src={`${process.env.PUBLIC_URL}/assets/save-icon.png`} 
              alt='search icon' 
            />
          </button>
        </NavLink>
        </header>

        <section>
          <h1> Books Search </h1>
          <h6> Powered by Google Books </h6>
        </section>

        <div>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/saved" component={SavedPage} />

        </div>
      </Router>
    </main>
  );
}

export default App;
