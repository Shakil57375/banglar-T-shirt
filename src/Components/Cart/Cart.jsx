import React from 'react';
import './Cart.css'
const Cart = ({cart, handleAddToCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloox</h3>
            <p><small>Thanks for westing your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? "red" : "blue"}>Order summary {cart.length}</h2>
            <p className={`fontWeight ${cart.length === 3 ? "yellow" : "purple" } `}>Something</p>
            {
                cart.length > 2 ? <span className='yellow'>Aro kino</span> : <span>Fokira</span>
            }
            {
                message
            }
            {
                cart.map(tshirt => <p key = {tshirt._id}>{tshirt.name} <button onClick= {() => handleAddToCart(tshirt._id)} >X</button> </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!!</p>
            }
            {
                cart.length === 3 || <h3>3 ta too hilo nah</h3>
            }
        </div>
    );
};

export default Cart;

/* 
***Conditional rendering
    1. use if else to set a variable that will contain an element, components
    2. ternary : condition ? "for true" : "false"
    3. Logitcal && : (if the condition is true then the next thing will be displayed)
    4. Logical || : (if the condition is false then the next thing will be displayed)
*/

/* 
***Conditional css class
    1. use ternary
    2. ternary inside template string.
 */