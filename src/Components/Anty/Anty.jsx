import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anty = ({ring}) => {
    return (
        <div>
            <p>Anty</p>
            <section 
            className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin ring = {ring} hasFriend={true}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Anty;