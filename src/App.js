import React from "react";
import Products from "./products";
import Navigation from "./navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
