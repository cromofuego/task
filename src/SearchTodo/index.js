import React from 'react';
import './SearchTodo.css';
import '../body.css';
import { TodoContext } from '../TodoContext'

function SearchTodo() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return(
        <div className='container-input' >
            <input
            value={searchValue}
            onChange={event => {
                setSearchValue(event.target.value);
                console.log(event.target.value);
            }}
                className='input'
                placeholder='Buscar Tarea'
            >
            </input>
        </div>

    );
};

export { SearchTodo };