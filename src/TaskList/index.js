import React from 'react';
import '../body.css';
import './TaskList.css';



function TaskList(props) {

    const setOpenModal = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <section>
            <ul>
                <li className='li-container' >
                    {props.children}
                </li>
                <div className='container-button_absolute_add'>
                    {/*Boton fixed, para agregar tareas*/}
                    <button
                        onClick={setOpenModal} 
                        className='button-add'
                    >
                        +
                    </button>
                </div>
            </ul>
        </section>
    );
}

export { TaskList };