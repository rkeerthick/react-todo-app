/* eslint-disable react/prop-types */

import { useState } from "react"

export default function EditTodoForm({editTodo, task}) {
    const[value, setValue] = useState(task.task)

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Update task" value={value} onChange={handleChange}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}