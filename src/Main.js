import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import Login from "./Login";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/recipes">Recipes</NavLink></li>
              <li id="float-right"><NavLink to="/Login">Login</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/recipes" component={Recipes}/>
              <Route path="/Login" component={Login}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;