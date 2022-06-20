import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { SearchTodo } from '../SearchTodo';
import { TaskList } from "../TaskList";
import { Task } from '../Task';

function AppUI({
    loading,
    error,    
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    onChange,
    onDelete,
}) {
    return(
        <React.Fragment>
        <TaskCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos.length}
        />
        <SearchTodo
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TaskList>
            {error && <p>Desesperate ocurrio un error</p>}
            {loading && <p>Estamos cargando no es desesperecios XD</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer Tarea</p>}

            {searchedTodos.map(todo => {
                if (!!todo) {
                    return (
                        <Task
                            onDelete={onDelete}
                            onChange={onChange}
                            todoComplete={todo.complete}
                            todoDescriptionTask={todo.descriptionTask}
                            key={todo.descriptionTask}
                        />
                    );
                }
            })}
        </TaskList>
        
    </React.Fragment>
    );
}

export { AppUI };