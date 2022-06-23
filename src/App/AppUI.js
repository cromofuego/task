import React, { useContext } from 'react';
import { TaskCounter } from '../TaskCounter';
import { SearchTodo } from '../SearchTodo';
import { TaskList } from "../TaskList";
import { Task } from '../Task';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TaskForm } from '../TaskForm';

function AppUI() {
    const {
        openModal,
        setOpenModal,
        error,
        loading,
        searchedTodos,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TaskCounter />
            <SearchTodo />

            <TaskList
                setOpenModal={setOpenModal}
            >
                {error && <div className='container-p_error'>
                    <p className='p_error' >Desesperate ocurrio un error</p>
                </div>}
                {loading && <p className='container-p_loading' >Estamos cargando no es desesperecios XD</p>}
                {(!loading && !searchedTodos.length) &&
                    <div className='container-new_task' >
                        <p className='p_new_task' >
                            Crea tu primer Tarea
                        </p>
                    </div>
                }

                {searchedTodos.map(todo => {
                    if (!!todo) {
                        return (
                            <Task
                                todoComplete={todo.complete}
                                todoDescriptionTask={todo.descriptionTask}
                                key={todo.descriptionTask}
                            />
                        );
                    }
                })}
            </TaskList>

            {!!openModal && (
                <Modal>
                    <TaskForm /> {/*En el Task Form esta la ventana de edicion y del formulario*/}
                </Modal>)}

        </React.Fragment>
    );
}

export { AppUI };