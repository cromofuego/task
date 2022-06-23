import React from 'react';
import { TodoContext } from '../TodoContext';
import '../body.css';
import './TaskFrom.css';


function TaskForm() {

    const {
        onAdd,
        setOpenModal,
    } = React.useContext(TodoContext);
    //
    const [valueAddNewTodo, setvalueAddNewTodo] = React.useState('');
    //Funciones
    const onChange = (event) => {
        setvalueAddNewTodo(event.target.value)
    }
    //
    const addSubmit = (event) => {
        event.preventDefault();
        onAdd(valueAddNewTodo);
        setOpenModal(false)
    }
    //
    const onCancel = () => {
        setOpenModal(false)
    }


    return (
        <form
            className='container-form'
            onSubmit={addSubmit}
        >
            <label
                className='label'
            >
                Agregar una tarea nueva
            </label>

            <textarea
                className='textarea'
                placeholder='Escribe Tu Tarea Aquí'
                value={valueAddNewTodo}
                onChange={onChange}
            ></textarea>

            <div
                className='container-buttons'
            >
                <button
                    className='cancel-button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className='save-button'
                    type='submit'
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}

export { TaskForm };