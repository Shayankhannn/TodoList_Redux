import { useDispatch, useSelector } from "react-redux"
import {  removeTodo, updateTodo } from "../app/features/todo/TodoSlice"
import React from "react";


const Todos = () => {
    const [editingId,setEditingId] = React.useState(null);;
    const[updatetxt,setUpdatetxt] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(false);
    // in useSelector you get access to the state
    const todos = useSelector((state) => state.todos || []);
    // console.log(todos)
    const Dispatch = useDispatch()

const updateTodoHandler = (e) => {
    e.preventDefault();
    if(updatetxt.trim() ){
    Dispatch(updateTodo({id:editingId, text:updatetxt}))
    setEditingId(null);
    setUpdatetxt("");
    }
}

const startEdit = (todo) => {
    setEditingId(todo.id);
    setUpdatetxt(todo.text);
}



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Todo List</h2>
        <ul className="space-y-4">
            { todos?.map((todo)=>(
                    
                <li key={todo.id}  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-100 rounded-md">
             {editingId === todo.id ? (
                    <form onSubmit={updateTodoHandler} className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <input type="text" value={updatetxt} onChange={(e) => setUpdatetxt(e.target.value)}  placeholder="Update your todo..." className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">Update Todo</button>
                    </form>
               
             ) : (
                
                    <div className="flex-1 text-lg font-medium  text-gray-800 items-center flex justify-between">
       
                        {todo.text} 
                        <button onClick={() => setIsCompleted(!isCompleted)}>{isCompleted ? "Completed" : "Not Completed"}</button>
                        </div>
                   
             )}
             <div className="mt-2 sm:mt-0 flex space-x-2">
                    <button onClick={()=>Dispatch(removeTodo(todo.id))}  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">Remove Todo</button>
                    {!editingId && (
                <button
                  onClick={() => startEdit(todo)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Update
                </button>
               )}
                    </div>
                
                </li>
                
            ))}
        </ul>
        
    </div>
  )
}

export default Todos


