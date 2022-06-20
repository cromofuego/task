import React, { useContext } from 'react';
import { TaskCounter } from '../TaskCounter';
import { SearchTodo } from '../SearchTodo';
import { TaskList } from "../TaskList";
import { Task } from '../Task';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        onChange,
        onDelete,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TaskCounter />
            <SearchTodo />

            <TaskList>
                {error && <p>Desesperate ocurrio un error</p>}
                {loading && <p>Estamos cargando no es desesperecios XD</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer Tarea</p>}

                {searchedTodos.map(todo => {
                    if (!!todo) {
                        return (
                            <Task
                                onChange={onChange}
                                onDelete={onDelete}
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