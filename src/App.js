import logo from './logo.svg';
import './App.css';

import Login from './views/authPage/Login/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './components/Header'
import Register from './views/authPage/register.js/Register'

function App(){
  return(
    <div className="container">

      <Router>
        <Header />
        <Switch>
          <Route path="/login"><Login/></Route>

          <Route path="/register"><Register/></Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
