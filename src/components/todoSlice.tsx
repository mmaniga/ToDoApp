import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        userState:[],
        cart:[]},
    reducers: {
        increment (state,action)  {
            console.log("from increment...");
            state.userState.push({
                id: nextTodoId++,
                text: action.payload,
                completed: false
            })
        },
        addTodo(state, action) {
            console.log("in addTodo" +action);
            state.userState.push({
                    id: nextTodoId++,
                    text: action.payload,
                    completed: false
            })
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodo,increment, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
