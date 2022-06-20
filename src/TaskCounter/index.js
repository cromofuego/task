import React from 'react';
import './TaskCounter.css';
import '../body.css';

function TaskCounter(props) {
    return(
        <header className='header-container_h1_p'>
            <h1>Tareas</h1>

            <div className='container-counters'>

            <div className='container-counter' >
                    <p>Total de Tareas</p>
                    <span>{props.totalTodos}</span>
                </div>

                <div className='container-counter' >
                    <p>Completadas</p>
                    <span>{props.completedTodos}</span>
                </div>

            </div>

        </header>
    );
}

export { TaskCounter };