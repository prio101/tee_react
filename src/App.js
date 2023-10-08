import React from "react";
import Products from "./products";
import Navigation from "./navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ProductDescription from "./products/productDescription";
import DashBoard from "./DashBoard";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreateProduct from "./DashBoard/CreateProduct";

export const baseurl = "http://localhost:3001/api/v1";

function PrivateRoute({ children, ...rest }) {
  const checkToken = () => {
    const token = localStorage.getItem("token");
    return !!(token);
  }

  return (
    <Route
      {...rest}
      render={() => {
        return checkToken() ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <Route path="/products/:id">
            <ProductDescription />
          </Route>

          <PrivateRoute exact path='/dashboard/create-product'>
            <CreateProduct />
          </PrivateRoute>
          
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>

          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
