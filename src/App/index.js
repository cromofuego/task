import React, { useState } from "react";
import { TaskCounter } from '../TaskCounter';
import { SearchTodo } from '../SearchTodo';
import { TaskList } from "../TaskList";
import { Task } from '../Task';



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

    if(!localStorageTodo){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageTodo);                       
    }

    const [ item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedTodo = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedTodo)
        setItem(newItem)
    }

    return [
        item,
        saveItem
    ]
}


function App() {
    
    const [ todos, setSaveTodo ] = useLocalStorage('TODO_V1', []);
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

export default App;