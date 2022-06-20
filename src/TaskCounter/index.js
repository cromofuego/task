import React from 'react';
import './TaskCounter.css';
import '../body.css';
import { TodoContext } from '../TodoContext';

function TaskCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <header className='header-container_h1_p'>
            <h1>Tareas</h1>

            <div className='container-counters'>

            <div className='container-counter' >
                    <p>Total de Tareas</p>
                    <span>{totalTodos}</span>
                </div>

                <div className='container-counter' >
                    <p>Completadas</p>
                    <span>{completedTodos}</span>
                </div>

            </div>

        </header>
    );
}

export { TaskCounter };