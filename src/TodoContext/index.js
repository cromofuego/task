import React from 'react';
import { UseLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: setSaveTodo,
        loading,
        error,
    } = UseLocalStorage('TODO_V1', []);
    const [ searchValue, setSearchValue] = React.useState('');  

    let searchedTodos = [];    

    if (!!searchValue) {
        searchedTodos = todos.filter(todo => {
            const textTodo = todo.descriptionTask.toLowerCase();
            const textSearchValue = searchValue.toLocaleLowerCase();
            return textTodo.includes(textSearchValue);
    })      
    } else {
        searchedTodos = todos;
    }

    let totalTodos = todos.length;

    let completedTodos = todos.filter(todo => !!todo.complete).length; 

    const onChange = (text) => {    
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === text);
        let changeTodo = [...todos]

        if(changeTodo[indexTodo].complete){
        changeTodo[indexTodo].complete = false;            
        } else {
        changeTodo[indexTodo].complete = true; 
        }
        
       setSaveTodo(changeTodo)
    }

    const onDelete = (text) => {    
        const indexTodo = todos.findIndex(todo => todo.descriptionTask === text);
        let changeTodo = [...todos]        
        changeTodo.splice(indexTodo, 1)
       setSaveTodo(changeTodo)
    }

    return(
        <TodoContext.Provider
            value={{
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
