import React, {useState} from 'react';
export const TodoList = ({ items }) => {
    const [todos, setTodos] = useState([])
    const listNotEmpty = items.length > 0
    const toggleComplete = (index) => {
       
        const checkedTodo= items.filter(item => {
            return item.id == index
        }).map(it => it.checked = !it.checked)
        setTodos(checkedTodo)
    };

    return (
        listNotEmpty ?
        items.map(item => {
                return <p key={item.id}> <label> <input type="checkbox" checked={item.checked} onChange={() => toggleComplete(item.id)} />
                    <span style={{
                        textDecoration: item.checked ? 'line-through' : 'none',
                        transition: 'text-decoration 0.8s'
                    }}>{item.text}</span> </label></p>
            })
            : <p>No records</p>
    )
}

export default TodoList