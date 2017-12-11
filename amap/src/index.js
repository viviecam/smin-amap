// c'est parti !
import React from 'react'; //Par défaut, vadans react, donc pas besoin de préciser le chemin
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

render(<StorePicker/>, document.querySelector('#main'));
render(<App/>, document.querySelector('#main'));  