import React, { useState } from 'react'
import TodoList from './TodoList'

export const Todo = () => {
    const [todoName, setTodoName] = useState('')
    const [arr, setArr] = useState([])

    const addClicked = () => {
        if (todoName.trim() !== '') {

            const newTodo = {
                id: arr.length + 1, // Gerando ID simples baseado no tamanho do array
                text: todoName,
                checked: false
              };
              const temp = [...arr, newTodo]
       
            setArr(temp)
            setTodoName('')
        }

    }

    return (
        <>
            <h1>My Todos </h1>
            <div id="form">
                <input type="text" onChange={(e) => setTodoName(e.target.value)} value={todoName} />
                <button onClick={addClicked}> add</button>
            </div>
            <div className="todos">
                <TodoList items={arr} />
            </div>
        </>
    )
}
export default Todo