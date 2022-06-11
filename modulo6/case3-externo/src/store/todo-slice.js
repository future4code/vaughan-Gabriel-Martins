import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4 } from 'uuid';


const initialState ={todoInputIncompleted: [] }

const todoSlice = createSlice({
    name:"todo",
    initialState,
      reducers:{ 
        todoIncompleted(state , action ){ 
            const id = uuidv4()
            const date = Date.now()
            const newTodo = {id ,todo: action.payload , status:"incompleted" , date }
            state.todoInputIncompleted.push(newTodo)
        },
        todoCompleted(state, action){ 
            const newCompletedTodo =  action.payload;
            const id = newCompletedTodo.id;
            state.todoInputIncompleted = state.todoInputIncompleted.filter(todo =>  todo.id !== id )
            state.todoInputIncompleted.push(newCompletedTodo)
        },
        todoDeleted(state, action ){ 
            const newCompletedTodo =  action.payload;
            const id = newCompletedTodo.id;
            state.todoInputIncompleted = state.todoInputIncompleted.filter(todo => todo.id !== id )
        },
       }
})


export const todoActions = todoSlice.actions;

export default  todoSlice;