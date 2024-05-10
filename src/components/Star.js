import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick }) => {
    return (
        <FaStar
            className='star'
            color={selected ? 'f1d21e' : '#4b4a47'}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Star;
