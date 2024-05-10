import React from 'react';
import image from '../img/image.jpg';
const Dialog = ({ onClose }) => {
    return (
        <div className="dialog-box">
            <img src={image} alt="Close" className='img' onClick={onClose} />
            <button className='close' onClick={onClose}>Close</button>
        </div>
    );
};

export default Dialog;
