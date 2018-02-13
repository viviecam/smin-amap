import React from 'react';
import LazyLoad from 'react-lazy-load';
import { formatPrice } from '../helpers';

class Veggie extends React.Component {

    getVeggie() {
        const veggie = {
            id: this.props.details.id,
            name: this.props.details.name,
            price: this.props.details.price,
            status: this.props.details.status,
            nbItem: 0,
            nbAvailable: this.props.details.nbAvailable
        }
        this.props.addVeggieToOrder(veggie)
    }

	render() {
        const { details } = this.props

        // On modifie le bouton en fonction du statut du légume
        var ajoutPanier = []
        if (details.status === "available"){
            ajoutPanier.push(<button onClick={() => this.getVeggie()}>Ajouter au panier</button>)
        } else {
            ajoutPanier.push(<button disabled>Plus de stock !</button>)
        }

		return (
			<li className="menu-veggie">
                <LazyLoad height={150} offsetVertical={700}>
                    <img src={details.image} alt=""/>
                </LazyLoad>
                <h3 className="veggie-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                {ajoutPanier}
            </li>
        )
	}
}

export default Veggie;