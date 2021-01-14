import React from 'react';
import './App.css';
import { HommePage, SearchPage } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SearchProvider } from "../Context/SerachContext";

function App() {
  return (
    <div className='app'>
      <SearchProvider>
        <Router>
          <Switch>
            <Route path='/' exact>
              <HommePage />{/* home page  */}
            </Route>
            <Route path='/search' >
              <SearchPage />{/* search page  */}
            </Route>
          </Switch>
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
