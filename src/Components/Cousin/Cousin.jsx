import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{children}</p>
            {hasFriend && <Friends ring = {ring} ></Friends>}
        </div>
    );
};

export default Cousin;