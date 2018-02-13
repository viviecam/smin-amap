import React from 'react';
import { withStyles } from 'material-ui/styles';
import { formatPrice } from '../helpers';

class Order extends React.Component {
	render() {
		var that = this
		var totalPrice = 0

		return (
			<div className="order-wrap">
				<h2>Votre commande</h2>
				<ul className="order">
					{
						Object
							.keys(this.props.veggieToOrder)
							.map(function (key) {
								return (
									<li>
										<p>{that.props.veggieToOrder[key].nbItem} kg {that.props.veggieToOrder[key].name}</p>
										{formatPrice(that.props.veggieToOrder[key].price)}
									</li>)
							})
					}
					<li className="total">
						<strong>Total:</strong>
						{
							Object
								.keys(this.props.veggieToOrder)
								.map(function (key) {
									totalPrice = totalPrice + that.props.veggieToOrder[key].price
									// totalPrice = formatPrice(totalPrice)
									// console.log(totalPrice)
								})
						}
						{formatPrice(totalPrice)}
					</li>
				</ul>
				<br/>
				<button onClick={() => "this.getVeggie()"}>Vider le panier</button>
			</div>

		)
	}
}

export default Order;