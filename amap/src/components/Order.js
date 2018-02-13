import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

	getVeggieToRemove(veggieKey) {
        const veggie = {
            name: veggieKey.name,
            price: veggieKey.price,
            status: veggieKey.status,
            nbItem: veggieKey.nbItem,
            nbAvailable: veggieKey.nbAvailable
        }
        this.props.removeVeggieToOrder(veggie)
    }

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
										<p>{that.props.veggieToOrder[key].nbItem} kg {that.props.veggieToOrder[key].name}
										</p>
										{/* Je passe le veggie en cours (en entier) */}
										<i onClick={() => that.getVeggieToRemove(that.props.veggieToOrder[key])} class="fas fa-minus-circle"></i>
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
									// console.log(that.props.veggieToOrder[key].price)
									totalPrice = totalPrice + that.props.veggieToOrder[key].price
									// totalPrice = formatPrice(totalPrice)
									// console.log(totalPrice)
								})
						}
						{formatPrice(totalPrice)}
					</li>
				</ul>
				<br/>
				<button onClick={() => this.props.emptyOrder()}>Vider le panier</button>
			</div>

		)
	}
}

export default Order;