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
		const veggies = {...this.state.veggies}

		//Pour ajouter le legume en cours
		Object
			.keys(order)
			.map(function (key){
				// On regarde si le veggie que l'on veut ajouter existe déjà dans le state
				// Et si c'est le dernier item que l'on peu ajouter avant qu'il n'y en ai plus
				if (order[key].name === veggie.name && order[key].nbItem === veggie.nbAvailable-1) {
					// On rajoute le dernier item
					veggie.nbItem = order[key].nbItem + 1
					// Et on change le status du veggie dans la liste des veggies
					Object
						.keys(veggies)
						.map(function (key2){
							if (veggies[key2].name === veggie.name) {
								veggies[key2].status = "unavailable"
							}
						})
				}
				// Si il reste plus d'un item disponible
				else if (order[key].name === veggie.name && order[key].nbItem < veggie.nbAvailable) {
					// On ajoute 1 au nombre d'item 
					veggie.nbItem = order[key].nbItem + 1
				}
			})
		//On calcule le nouveau prix
		veggie.price = veggie.nbItem * veggie.price
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

export default App