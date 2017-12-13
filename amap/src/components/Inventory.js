import React from 'react';
import AddVeggieForm from './AddVeggieForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddVeggieForm />
      </div>
    )
  }
}

export default Inventory;
