import React from "react";
import Products from "./products";
import Navigation from "./navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductDescription from "./products/productDescription";
export const baseurl = "http://localhost:3001/api/v1";
function App() {
  return (
    <Router>
      <div>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDescription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
