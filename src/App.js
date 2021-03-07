import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Pokedex from './components/Pokedex';
import Login from './components/login';

function App(props) { 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokedex"> 
            <Pokedex />
          </Route>
          <Route path="/"> 
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
