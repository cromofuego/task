import React, { useEffect, useState } from "react";
import { AppUI } from './AppUI.js';



// const defaultTodos = [
//     {
//         descriptionTask: 'sacar el perro a paser',
//         complete: false,
//     },
//     {
//         descriptionTask: 'hecharle agua al captus',
//         complete: false,
//     },
//     {
//         descriptionTask: 'pagar las facturas1',
//         complete: false,
//     },
//     {
//         descriptionTask: 'pagar las facturas2',
//         complete: true,
//     },
//     {
//         descriptionTask: 'pagar las facturas3',
//         complete: true,
//     },
//     {
//         descriptionTask: 'pagar las facturas4',
//         complete: true,
//     },
// ];

function useLocalStorage(itemName, initialValue) {

    const localStorageTodo = localStorage.getItem(itemName);
    
    let parsedItem;

    const [ item, setItem] = React.useState(initialValue);
    const [ loading , setLoading] = React.useState(true);
    const [ error , setError] = React.useState(false);

    

    useEffect(() => {
        setTimeout(() => {
            try {
                if(!localStorageTodo){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageTodo);                       
                }
                setLoading(false)
            } catch(error) {
                setError(error)                
            }
        }, 1000)
    });


    const saveItem = (newItem) => {
        try {
            const stringifiedTodo = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedTodo)
            setItem(newItem)
        } catch(error) {
            setError(error)
        }

    }

    return {
        item,
        saveItem,
        loading,
        error,
    }    
}


function App() {
    
    const {
        item: todos,
        saveItem: setSaveTodo,
        loading,
        error,
    } = useLocalStorage('TODO_V1', []);
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

    let completedTodos = todos.filter(todo => {
        return todo.complete
    }); 

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
      <AppUI
      loading={loading}
      error={error}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onChange={onChange}
      onDelete={onDelete}        
      />
    );
}

export default App;