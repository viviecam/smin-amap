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
		this.removeVeggieToOrder = this.removeVeggieToOrder.bind(this);
		this.emptyOrder = this.emptyOrder.bind(this);

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
	
	//Ajouter des Veggies au catalogue depuis le fichiers sample-veggies
	loadSamples() {
		const order = {...this.state.order}
		// On copie les sample veggies pour pouvoir travailler dessus
		const exVeggies = sampleVeggies

		// Pour chaque veggie que l'on s'apprête à ajouter au state VEGGIE
		Object
			.keys(exVeggies)
			.map(function(key){
			// On vérifie le nombre d'item de chaque veggie présent dans la commande (venant du local Storage)
			// Si il y a le nombre maximum, on va modifier le status du veggie dans le state VEGGIE et 
			// donc modifier le bouton "Plus en stock" en fonction
				Object
					.keys(order)
					.map(function(key2){
						if (order[key2].name === exVeggies[key].name && order[key2].nbItem === exVeggies[key].nbAvailable) {
							// console.log("C'est le dernier!") 
							exVeggies[key].status = "unavailable"
						}
				})
			})

		this.setState({
		  veggies: exVeggies})
	}
		
	//Ajouter des Veggies dans notre commande
	addVeggieToOrder(veggie) {
		//Pour mettre à jour le state en gardant ce qui est déjà dans le state
		// on fait une copie de notre state order
		const order = {...this.state.order}
		const veggies = {...this.state.veggies}

		var currentVeggieUnitPrice = 1

		//Pour ajouter le légume en cours
		Object
			.keys(order)
			.map(function (key){
				// On regarde si le veggie que l'on veut ajouter existe déjà dans le state
				// Et si c'est le dernier item que l'on peu ajouter avant qu'il n'y en ai plus
				if (order[key].name === veggie.name && order[key].nbItem === veggie.nbAvailable-1) {
					// On rajoute le dernier item
					veggie.nbItem = order[key].nbItem + 1
					Object
						.keys(veggies)
						.map(function (key2){
							if (veggies[key2].name === veggie.name) {
								// Et on change le status du veggie dans la liste des veggies
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

		// Calcul du nouveau prix du veggie, en fonction du nombre d'item
		Object
			.keys(veggies)
			.map(function (key3){
				if (veggies[key3].name === veggie.name) {					
					// Et on récupère le pix unitaire du légume courant, depuis le state VEGGIE
					currentVeggieUnitPrice = veggies[key3].price
				}
			})
		veggie.price = veggie.nbItem * currentVeggieUnitPrice
		// Puis on remplace l'ancien veggie par le nouveau, avec le nouveau nombre de produit et le nouveau prix
		order[veggie.id] = veggie;
		// appliquer le state
		this.setState({order})

		// On update au localStorage
		var orderToStock = {order}
		localStorage.setItem('currentOrder', JSON.stringify(orderToStock)); 
	}

	//Supprimer des Veggies dans notre commande
	removeVeggieToOrder(veggie) {
		//Pour mettre à jour le state en gardant ce qui est déjà dans le state
		// on fait une copie de notre state order
		const order = {...this.state.order}
		const veggies = {...this.state.veggies}

		var currentVeggieUnitPrice = 1

		//Pour supprimer un item du légume en cours
		Object
			.keys(order)
			.map(function (key){
				// On regarde si le dernier item du veggie que l'on veut supprimer, est le dernier disponible
				if (order[key].name === veggie.name && order[key].nbItem === veggie.nbAvailable) {
					// On supprime 1 item
					veggie.nbItem = order[key].nbItem - 1
					Object
						.keys(veggies)
						.map(function (key2){
							if (veggies[key2].name === veggie.name) {
								// Et on change le status du veggie dans la liste des veggies
								veggies[key2].status = "available"
							}
							
						})
				}
				// 
				else if (order[key].name === veggie.name && order[key].nbItem < veggie.nbAvailable && order[key].nbItem > 0) {
					// On supprime 1 item 
					veggie.nbItem = order[key].nbItem - 1
				}
			})
		// Calcul du nouveau prix du veggie, en fonction du nombre d'item
		Object
			.keys(veggies)
			.map(function (key3){
				if (veggies[key3].name === veggie.name) {					
					// Et on récupère le pix unitaire du légume courant, depuis le state VEGGIE
					currentVeggieUnitPrice = veggies[key3].price
				}
			})
		veggie.price = veggie.nbItem * currentVeggieUnitPrice
		// Puis on remplace l'ancien veggie par le nouveau, avec le nouveau nombre de produit et le nouveau prix
		order[veggie.id] = veggie;
		// appliquer le state
		this.setState({order});

		// On update le localStorage
		var orderToStock = {order}
		localStorage.setItem('currentOrder', JSON.stringify(orderToStock)); 
	}

	componentDidMount(){
		const initVeggie = sampleVeggies

		// var currentVeggieUnitPrice = 1

		// //Pour chaque légume que l'on ajoute dans le state order
		// Object 
		// 	.keys(initVeggie)
		// 	.map(function(key){
		// 		console.log("Nb items : " + initVeggie[key].nbItem + " & price : " + initVeggie[key].price)

		// 		// On va chercher le prix unitaire du légume courant, dans sampleVeggies
		// 		Object
		// 		.keys(sampleVeggies)
		// 		.map(function (key2){
		// 			if (sampleVeggies[key2].name === initVeggie[key].name) {	
		// 				console.log("On a récupéré le prix unitaire du légume : " + sampleVeggies[key2].name + " : " + 
		// 			sampleVeggies[key2].price)
		// 				currentVeggieUnitPrice = sampleVeggies[key2].price
		// 				console.log(currentVeggieUnitPrice)
		// 				initVeggie[key].price = initVeggie[key].nbItem * currentVeggieUnitPrice
		// 				console.log(initVeggie[key].price)
		// 				// Et on récupère le pix unitaire du légume courant, depuis le state VEGGIE
		// 				// currentVeggieUnitPrice = veggies[key3].price
		// 			}
		// 		})
		// 		// newPrice = initVeggie[key].price * initVeggie[key].nbItem
		// 		// initVeggie[key] = newPrice;
		// 	})

		

		this.setState({
			order: initVeggie
		}, () => {
			// this.emptyOrder()
			console.log(this.state.order)}
		)

		if ((typeof JSON.parse(localStorage.getItem('currentOrder')) !== "undefined") 
			&& (JSON.parse(localStorage.getItem('currentOrder')) !== null)){
				this.setState({
				order: JSON.parse(localStorage.getItem('currentOrder')).order
			})
		} 
		
		
  	}

	emptyOrder() {
		// On vide le localStorage
		localStorage.clear();

		// On réinitialise les nombres d'items à zéro dans le state ORDER
		const order = {...this.state.order}
		Object
			.keys(order)
			.map(function (key){
				order[key].nbItem = 0,
				order[key].price = 0
			})
	

		// Pour réinitialiser le bouton disabled "Plus en stock", on réinitialise le statut du veggie,
		// Dans le state VEGGIE, si le veggie a bien au moins 1 item disponible
		const veggies = {...this.state.veggies}
		Object
			.keys(veggies)
			.map(function (key){
				if (veggies[key].nbAvailable >= 1) {
					veggies[key].status = "available"
					// this
				}
			}) 

		// On applique le state
		this.setState({veggies, order});

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
			  <Order veggieToOrder={this.state.order} removeVeggieToOrder={this.removeVeggieToOrder} emptyOrder={this.emptyOrder}/>
			  <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
			</div>
		  )
	}
}

export default App