/* eslint-disable react/jsx-key */
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function TodoWrapper() {
    const[todos, setTodos] = useState([])

    function addTodo(value) {
        setTodos([...todos, {id:value, task:value, completed:false, isEditing:false}])
        console.log(todos)
    }

    function toggleComplete(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? {
                ...todo,
                completed :!todo.completed
            } : todo
        ))
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => 
            todo.id !== id
        ))
    }

    function editTodo(id) {
        setTodos(todos.map(todo => todo.id === id ? 
            {
                ...todo,
                isEditing: !todo.isEditing
            }:todo
        ))
    }

    function editTask(task, id) {
        setTodos(todos.map(todo => todo.id === id ? {
                ...todo, 
                task,
                isEditing: !todo.isEditing
            } : todo
        ))
    } 

    return(
        <div className="TodoWrapper">
            <h1>Things to be done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo} />) :
            (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
            ))}
        </div>
    )
}