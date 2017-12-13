// c'est parti !
import React from 'react'; //Par défaut, vadans react, donc pas besoin de préciser le chemin
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

const RouteurTest = () => (
	<Router>
		<div>
			<Route exact path="/" components={StorePicker}/>
			<Route path="/store/" components={App}/>
		</div>
	</Router>
)

// render(<StorePicker/>, document.querySelector('#main'));
// render(<App/>, document.querySelector('#main'));  
render(<RouterTest/> , document.querySelector('#main'));

