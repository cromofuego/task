import React from 'react';
import { UseLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    //Local Storage
    const {
        item: todos,
        saveItem: setSaveTodo,
        loading,
        error,
    } = UseLocalStorage('TODO_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [openEditTodo, setOpenEditTodo] = React.useState(false);
    const [currentDescriptionTaskWillBeChange, setCurrentDescriptionTaskWillBeChange] = React.useState('')

    //Variables
    let searchedTodos = [];
    let totalTodos = todos.length;
    let completedTodos = todos.filter(todo => !!todo.complete).length;
    //

    if (!!searchValue) {
        searchedTodos = todos.filter(todo => {
            const textTodo = todo.descriptionTask.toLowerCase();
            const textSearchValue = searchValue.toLocaleLowerCase();
            return textTodo.includes(textSearchValue);
        })
    } else {
        searchedTodos = todos;
    }

    //Funciones 
    const onEdit = (currentTextTask, textWillToReplaceCurrentTextTask) => {
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === currentTextTask);
        let changeTodo = [...todos]
        setCurrentDescriptionTaskWillBeChange(
            changeTodo[indexTodo] = {
                descriptionTask: textWillToReplaceCurrentTextTask,
                complete: false,
            }
        )
        setSaveTodo(changeTodo)
    }
    //
    const onAdd = (text) => {
        let changeTodo = [...todos]
        let validationDiferentDescriptionTask = changeTodo.some(todo => todo.descriptionTask === text);
        if((changeTodo.length === 0) || (!validationDiferentDescriptionTask)){//primera validacion, cuando la lista este vacia
            changeTodo.push({
                descriptionTask: text,
                complete: false,
            })
            setSaveTodo(changeTodo)
        }
    }
    //
    const ReadIndexWillBeChangeDescriptionTask = (text) => {
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === text);
        let changeTodo = [...todos]
        setCurrentDescriptionTaskWillBeChange(changeTodo[indexTodo].descriptionTask)
    }
    //
    const onChange = (text) => {
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === text);
        let changeTodo = [...todos]

        if (changeTodo[indexTodo].complete) {
            changeTodo[indexTodo].complete = false;
        } else {
            changeTodo[indexTodo].complete = true;
        }

        setSaveTodo(changeTodo)
    }
    //
    const onDelete = (text) => {
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === text);
        let changeTodo = [...todos]
        changeTodo.splice(indexTodo, 1)
        setSaveTodo(changeTodo)
    }
    //

    return (
        <TodoContext.Provider
            value={{
                setCurrentDescriptionTaskWillBeChange,
                currentDescriptionTaskWillBeChange,
                ReadIndexWillBeChangeDescriptionTask,
                onEdit,
                openEditTodo,
                setOpenEditTodo,
                onAdd,
                openModal,
                setOpenModal,
                loading,
                error,
                searchedTodos,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                onChange,
                onDelete,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };
