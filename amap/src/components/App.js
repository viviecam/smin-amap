import React from 'react';
// import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleVeggies from '../sample-veggies';


class App extends React.Component {
	constructor() {
		super();

		this.addVeggie = this.addVeggie.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		this.state = {
			veggies: {}
		}
	}

	addVeggie(veggie) {
		//mettre à jour le state
		// on fait une copie de notre state
		const veggies = {...this.state.veggies}
		//ajouter nos nouveaux légumes
		const timestamp = Date.now();
		veggies[`veggie-${timestamp}`] = veggie;
		//appliquer le state
		this.setState({veggies});
	}
	
	loadSamples() {
		this.setState({
		  veggies: sampleVeggies
		});
	  }

	render() {
		return (
			<div className="amap">
				<div className="menu">
					<Header tagline="Les bons legumes"/>
				</div>
				<Order/>
				<Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;