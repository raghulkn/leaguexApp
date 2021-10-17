import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CrudSquad from './page/CrudSquad';
import SelectSquad from './page/SelectSquad';
import UpcomingLeagues from './page/UpcomingLeagues';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UpcomingLeagues}/>
        <Route path="/squad/:matchid" component={CrudSquad}/>
        <Route path="/selectsquad/:squadno" component={SelectSquad}/>
      </Switch>
    </Router>
  );
}

export default App;
