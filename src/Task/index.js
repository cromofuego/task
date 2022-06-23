import { TodoContext } from '../TodoContext';
import React, { useState } from 'react';
import { EditTodo } from '../EditTodo';
import { Modal } from '../Modal';
import '../body.css';
import './Task.css';




function Task({ todoComplete, todoDescriptionTask }) {

    const {
        ReadIndexWillBeChangeDescriptionTask,
        onChange,
        onDelete,
        setOpenModal,
        setOpenEditTodo,
        openEditTodo
    } = React.useContext(TodoContext)

    //Variable
    let task;
    if (todoComplete) {
        task = 'Tarea Completada';
    } else {
        task = '¡Trabajando en Ello!';
    }
    //Funciones
    const openModal = () => {
        setOpenModal(true);
    }
    //
    const openEdit = () => {
        ReadIndexWillBeChangeDescriptionTask(todoDescriptionTask)
        setOpenEditTodo(true)
    }

    return (
        <React.Fragment>
            {/* ventana principal */}
            <div className='main-container_li'>
                <div className='li-container_top_span_p' >
                    <input
                        onClick={() => onChange(todoDescriptionTask)}
                        className={`span ${todoComplete && 'span--active '}`}
                    >
                    </input>

                    <p className='li-container_top_span_p_p'>{task}</p>
                </div>

                <div className={`li-container_middle_p ${todoComplete && 'li-p--active'} `}>
                    <p>
                        {todoDescriptionTask}
                    </p>
                </div>

                <div className='li-container_bottom_buttons'>
                    <button onClick={openEdit} >
                        Editar
                    </button>
                    <div className='li-container_bottom_buttons_delete_add ' >
                        <button onClick={() => onDelete(todoDescriptionTask)} >
                            Eliminar
                        </button>
                        <button onClick={openModal} >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>  
            {/* ventana de edicion */}
            {!!openEditTodo && (
                <Modal>
                    <EditTodo />
                </Modal>
            )}
        </React.Fragment>
    );
}

export { Task };