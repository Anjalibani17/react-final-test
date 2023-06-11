import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
