import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  const AuthContainer = () => (
    <div>
      <PrivateRouter isAuth={isAuth} exact path="/dashboard" component={Dashboard} />
      <PrivateRouter isAuth={isAuth} path="/about" component={About} />
      <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
    </div>
  );
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Switch>
        <Route
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} isAuth={isAuth} />}
        />
        <Route component={AuthContainer} />
        <Route path="/register" component={Register} />

      </Switch>
    </Router>
  );
};

export default AppRouter;


