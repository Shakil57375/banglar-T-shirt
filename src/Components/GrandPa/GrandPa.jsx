import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle'
import Anty from '../Anty/Anty'
import './Grandpa.css'
export const RingContext = createContext("gold")

const GrandPa = () => {
    const ring = "diamond"
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <RingContext.Provider value='golden ring'>
                <section className='flex'>
                    <Father ring = {ring} ></Father>
                    <Uncle></Uncle>
                    <Anty ring = {ring} ></Anty>
                </section>
            </RingContext.Provider >
        </div>
    );
};

export default GrandPa;