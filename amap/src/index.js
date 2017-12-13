// c'est parti ! L'ordre des imports est important !
import React from 'react'; //Par défaut, vadans react, donc pas besoin de préciser le chemin
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './css/style.css';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={StorePicker}/>
				<Route path="/store/:storeid" component={App}/>
				<Route component={NotFound}/>
			</Switch>
		</Router>
	)
}
  
render(<Root/> , document.querySelector('#main'));

