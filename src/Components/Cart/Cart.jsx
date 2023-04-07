import React from 'react';

const Cart = ({cart, handleAddToCart}) => {

    return (
        <div>
            Order summary {cart.length}
            {
                cart.map(tshirt => <p key = {tshirt._id}>{tshirt.name} <button onClick= {() => handleAddToCart(tshirt._id)} >X</button> </p>)
            }
        </div>
    );
};

export default Cart;