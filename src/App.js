import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
      <Router>
        <div>
          <Header />
          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/about">About</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              {/*<About />*/}
            </Route>
            <Route path="/users">
              {/*<Users />*/}
            </Route>
            <Route path="/">
              <span>Home</span>
              {/*<Home />*/}
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
