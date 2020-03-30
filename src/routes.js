import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Logon from './pages/Logon';
import Registers from './pages/Registers';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon}></Route>
        <Route path='/registers' component={Registers}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/newincident' component={NewIncident}></Route>
      </Switch>
    </BrowserRouter>
  );

}