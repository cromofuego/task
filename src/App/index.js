import React, { useEffect, useState } from "react";
import { AppUI } from './AppUI.js';
import { TodoProvider} from '../TodoContext';



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




function App() {  
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>

    );
}

export default App;