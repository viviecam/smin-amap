import React from 'react';
import PropTypes from 'prop-types';
//Fonction qui génère au hasard des noms de magasins
import { getFunName } from '../helpers';

//Emmet
//Auto generate div Ctrl+Shift+G
//Autocompletion Ctrl+E

class StorePicker extends React.Component {
	  // Autre méthode pour rendre StorePicker accessible
	  // à goToStore en appellant "this":
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();		
    // On récupère le texte entré dans le formulaire
		const storeId = this.storeInput.value;
		console.log(`On va vers ${storeId}`)
		//const value = $(input).val()
		//On récupère le texte entré dans le formulaire
		//Ensuite on va se déplacer de / vers /store/:storeid		
		this.props.history.push(`store/${storeId}`)
	}
	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e) }>
				<h2>Entrez un nom de magasin</h2>
				<input type="text" ref={(input) => { this.storeInput = input}} required placeholder="Nom du magasin" defaultValue={ getFunName()} ref={(input) => { this.storeInput = input}}/> 
				{/*{ getFunName() } Syntax pour appeler le javascript*/ }
				<button type="submit">Visiter le magasin</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: PropTypes.object
}

export default StorePicker;