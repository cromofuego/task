import React from 'react';
import '../body.css';
import './TaskList.css';



function TaskList(props) {
    return (
        <section>
            <ul>
                <li className='li-container' >
                    {props.children}
                </li>
                <div className='container-button_absolute_add'>
                    <button className='button-add'>
                        +
                    </button>
                </div>
            </ul>
        </section>
    );
}

export { TaskList };