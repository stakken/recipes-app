import Header from './components/Header'
import Home from './components/Home'
import Recipes from './components/Recipes'
import Login from './components/Login'
import { Route, HashRouter } from "react-router-dom"

function Main() {
    return (
      <div>
      <HashRouter>
      <Header />
      
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/Login" component={Login}/>
      </div>
      </HashRouter>
    </div>
    );
}
 
export default Main;