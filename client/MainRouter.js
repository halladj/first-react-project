import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './core/Home';
import User from './user/Users';


const MainRouter = () => {
    return ( 
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={User}/>
       </Switch>
    </div>
   )
}
export default MainRouter;
