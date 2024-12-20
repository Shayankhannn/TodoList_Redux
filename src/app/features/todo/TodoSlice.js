  import { createSlice } from "@reduxjs/toolkit";


  const saveTodo = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
  }

  // const loadTodos = ( ) => {
  //   const savedTodos = localStorage.getItem('todos')
  //   return savedTodos ? JSON.parse(savedTodos) : []
  // }
  const loadTodos = () => {
    try {
      const savedTodos = localStorage.getItem('todos');
      const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
      
  
      console.log('Loaded todos from localStorage:', parsedTodos);
  
    
      return Array.isArray(parsedTodos) ? parsedTodos : [];
    } catch (e) {
      console.error('Error loading todos from localStorage', e);
      return []; 
    }
  };


  export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      todos: loadTodos(),
    },
    reducers  : {
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          text: action.payload,
          completed: false
          

        }
        state.todos.push(newTodo)
        saveTodo(state.todos)
      },  
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        saveTodo(state.todos)
      },
      updateTodo: (state, action) => {
        state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        saveTodo(state.todos)
      },
      toggleTodo: (state, action) => {
        state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        saveTodo(state.todos)
      },
  
    
    }
  })

  export const { addTodo, removeTodo ,updateTodo,toggleTodo} = todoSlice.actions

  export default todoSlice.reducer