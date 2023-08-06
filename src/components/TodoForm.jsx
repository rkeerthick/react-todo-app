/* eslint-disable react/prop-types */

import { useState } from "react"

export default function TodoForm({addTodo}) {
    const[value, setValue] = useState("")

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What is your task today?" value={value} onChange={handleChange}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}