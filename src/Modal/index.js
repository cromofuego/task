import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import '../body.css';


function Modal({ children }) {

    return ReactDOM.createPortal(

        <div className='container-modal'
        >
            {children}
        </div>,
        document.getElementById('modal')

    );
}

export { Modal };