import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";


const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    const AuthContainer = () => (
      <div>
        <PrivateRouter isAuth={isAuth} path="/" component={Dashboard} />
        <PrivateRouter isAuth={isAuth} path="/about" component={About} />
        <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
        <PrivateRouter isAuth={isAuth} path="/profile" component={Profile} />
        <PrivateRouter isAuth={isAuth} path="/new-blog" component={NewBlog} />
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
          <Route path="/register" component={() => <Register setIsAuth={setIsAuth} isAuth={isAuth} />} />
          <Route component={AuthContainer} />
  
        </Switch>
        
      </Router>
    );
  };
  
  export default AppRouter;
  
  
  
  //   const [isAuth, setIsAuth] = useState(false)
  //   return(
  //       <Router>
  //         <Navbar/>
  //         <Switch>
  //           <Route path='/login' component={Login}/>
  //           <Route path='/register' component={Register}/>
  //           <Route path='/profile' component={Profile}/>
  //           <Route path='/new' component={NewBlog}/>
  //           <Route path='/details' component={Details}/>
  //           <Route path='/about' component={About}/>
  //           <Route path='/' component={Dashboard}/>
  //         </Switch>
  //       </Router>
  //   )
  // }
  