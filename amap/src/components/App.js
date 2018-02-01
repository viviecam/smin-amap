import React, { cloneElement } from 'react';
// import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Veggie from './Veggie';
import sampleVeggies from '../sample-veggies';


class App extends React.Component {
	constructor() {
		super();

		//Initialisation des fonctions, pour pouvoir récupérer le this
		this.addVeggie = this.addVeggie.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addVeggieToOrder = this.addVeggieToOrder.bind(this);

		this.state = {
			veggies: {},
			order: {}
		}
	}

	//Ajouter des Veggies au catalogue (page de gauche) depuis le formulaire AddVeggieForm
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
	
	//Ajouter des Veggies au catalogue (page de gauche) depuis le fichiers sample-veggies
	loadSamples() {
		// console.log(sampleVeggies)
		this.setState({
		  veggies: sampleVeggies
		});
		}
		
	//Ajouter des Veggies dans notre commande
	addVeggieToOrder(veggie) {
		//Pour mettre à jour le state en gardant ce qui est déjà dans le state
		// on fait une copie de notre state order
		const order = {...this.state.order}
		//ajouter le legume choisi
		// const timestamp = Date.now();
		// veggiesOrder[`veggie-${timestamp}`] = veggie;
		var that = this

		Object
			.keys(this.state.order)
			.map(function (key){
				// On regarde si le veggie que l'on veut ajouter existe déjà dans le state,
				if (that.state.order[key].name === veggie.name) {
					// Si oui, on ajoute 1 au nombre de produit 
					veggie.nbProduct = that.state.order[key].nbProduct + 1
					//On calcule le nouveau prix
					veggie.price = veggie.nbProduct * veggie.price
				}
			})
			// Puis on remplace l'ancien veggie par le nouveau, avec le nouveau nombre de produit et le nouveau prix
		order[veggie.name] = veggie;
		//appliquer le state
		this.setState({order});
		// console.log(this.state.order)
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
							.map(key =><Veggie key = {key} details={this.state.veggies[key]} addVeggieToOrder={this.addVeggieToOrder}/>)
					}
					</ul>
			  </div>
			  <Order veggieToOrder={this.state.order}/>
			  <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
			</div>
		  )
	}
}

export default App;