import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleAddToCart = (tshirt) =>{
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            alert("add tosat here"); // see the 56 modlues 3rd vd again
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(tshirt => tshirt._id !== id );
        setCart(remaining);Z
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt handleAddToCart = {handleAddToCart} tShirt={tShirt} key = {tShirt._id} ></TShirt> )
                }
            </div>
            <div className='cart-container'>
                <Cart handleAddToCart = {handleRemoveFromCart} cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Home;