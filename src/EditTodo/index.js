import React from 'react';
import { TodoContext } from '../TodoContext';
import '../body.css';
import './EditTodo.css';

function EditTodo() {

    const {
        currentDescriptionTaskWillBeChange,
        setOpenEditTodo,
        onEdit
    } = React.useContext(TodoContext);
    //
    const [
        editingDescriptionTask,
        setEditingDescriptionTask
    ] = React.useState(currentDescriptionTaskWillBeChange)
    //Funciones
    const onCancel = () => {
        setOpenEditTodo(false)
    }
    //
    const onClick = () => {
        onEdit(currentDescriptionTaskWillBeChange, editingDescriptionTask)
        setOpenEditTodo(false);
    }

    return (
        <form className='container-form_edit'>
            <label className='label_edit'>
                Editar la tarea
            </label>

            <textarea
                value={editingDescriptionTask}
                onChange={(event) => setEditingDescriptionTask(event.target.value)}
                className='textarea_edit'
                placeholder='Escribe Tu Tarea Aquí'
            >
            </textarea>

            <div className='container-buttons_edit'>
                <button
                    className='cancel-button_edit'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className='save-button_edit'
                    onClick={onClick}
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export { EditTodo };

