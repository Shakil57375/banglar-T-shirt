import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <p><small>Ring : {angti} </small></p>
        </div>
    );
};

export default Special;