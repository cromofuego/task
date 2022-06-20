import React from 'react';

function UseLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodo = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageTodo) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageTodo);
                }
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000);
    });

    const saveItem = (newItem) => {
        try {
            const stringifiedTodo = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedTodo)
            setItem(newItem)
        } catch (error) {
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

export { UseLocalStorage };