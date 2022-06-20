import React from 'react';
import './SearchTodo.css';
import '../body.css';

function SearchTodo({searchValue, setSearchValue}) {
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