import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo,  } from '../app/features/todo/TodoSlice';

const AddTodo = () => {
    const [input, setInput] = React.useState("");
   
    const Dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
        // dispatch use reducer to do changes in store values
        Dispatch(addTodo(input))
       
        setInput("");
        }
    }

   

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
         <form onSubmit={ addTodoHandler}   className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        className="flex-1 bg-gray-100 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-900 py-2 px-4 leading-6 transition duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
    
      >
        Add Todo
      </button>
    </form>
    </div>
  )
}

export default AddTodo