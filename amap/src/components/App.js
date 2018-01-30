import React from 'react';
// import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Veggie from './Veggie';
import sampleVeggies from '../sample-veggies';


class App extends React.Component {
	constructor() {
		super();

		this.addVeggie = this.addVeggie.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		this.state = {
			veggies: {},
			order: {}
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
		console.log(sampleVeggies)
		this.setState({
		  veggies: sampleVeggies
		});
	  }

	render() {
		return (
			<div className="amap">
			  <div className="menu">
				<Header tagline="Des bons legumes" />
					<ul className="list-of-veggies">
					{
						Object
							.keys(this.state.veggies)
							.map(key =><Veggie key = {key} details={this.state.veggies[key]}/>)
					}
					</ul>
			  </div>
			  <Order />
			  <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
			</div>
		  )
	}
}

export default App;