import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	render() {
		return (
			<div className="amap">
				<div className="menu">
					<Header/>
				</div>
				<Order/>
				<Inventory/>
			</div>
		)
	}
}

export default App;