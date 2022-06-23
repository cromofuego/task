import React from 'react';
import { TodoContext } from '../TodoContext';
import './SearchTodo.css';
import '../body.css';

function SearchTodo() {
    
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className='container-input' >
            <input
                value={searchValue}
                onChange={event => {
                    setSearchValue(event.target.value);
                }}
                className='input'
                placeholder='Buscar Tarea'
            >
            </input>
        </div>
    );
};

export { SearchTodo };