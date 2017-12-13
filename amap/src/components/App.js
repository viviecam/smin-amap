import React from 'react';
// import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			veggies: {}
		}

		this.addVeggie = this.addVeggie.bind(this);
	}

	addVeggie(veggie) {
		//mettre à jour le state
		const veggies = {...this.state.veggies}
		//ajouter nos nouveaux légumes
		const timestamp = Date.now();
		veggies[`veggie-${timestamp}`] = veggie;
		//appliquer le state
		this.setState(veggies);
	}

	render() {
		return (
			<div className="amap">
				<div className="menu">
					<Header tagline="Les bons legumes"/>
				</div>
				<Order/>
				<Inventory addVeggie={this.addVeggie} />
			</div>
		)
	}
}

export default App;