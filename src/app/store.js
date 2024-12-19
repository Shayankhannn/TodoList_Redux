import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./features/todo/TodoSlice";


 export const store = configureStore({
    reducer: todoSlice

 });