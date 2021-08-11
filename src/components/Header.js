import './Header.css'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom"


export const Header = () => {
    return (
        
        <div className="app">
          <div className="navButtons">
            <NavLink className="homeButton" exact to="/">Home</NavLink>
            <NavLink className="recipeButton" to="/recipes">Recipes</NavLink>
            <NavLink className="loginButton" to="/Login">Login</NavLink>
          </div>


        </div>
     
    )
}
export default Header