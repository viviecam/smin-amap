import React from 'react';
// import { render } from 'react-dom';

//Emmet
//Auto generate div Ctrl+Shift+G
//Autocompletion Ctrl+E

class StorePicker extends React.Component {
	render() {
		{/*return React.createElement('p', {className: 'Testing'}, "C'est super")*/}
		return (
			<form className="store-selector">
				<h2>Entrez un nom de magasin</h2>
				<input type="text" required placeholder="Nom du magasin"/>
				<button type="submit">Visiter le magasin</button>
			</form>
		)
	}
}

export default StorePicker;