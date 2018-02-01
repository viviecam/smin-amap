import React from 'react';

class Veggie extends React.Component {

    getVeggie() {
        const veggie = {
            name: this.props.details.name,
            price: this.props.details.price,
            status: this.props.details.status,
            nbProduct: 1
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
                <img src={details.image} alt=""/>
                <h3 className="veggie-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                {ajoutPanier}
            </li>
        )
	}
}

export default Veggie;