import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
     {/* La <Route> qui suit n'a pas de "path", donc elle va
         toujours matcher. Cela veut dire que NotFound va
         s'afficher quand aucun des autre <Route>s ne match l'url actuelle. */}
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector('#main'));
