import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello everyone.",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    // updateTodo: (state, action) => {
    //     state.todos = state.todos.map((t) => (
    //         t.id === action.payload.id ? { ...t, text: action.payload.text} : t
    //     ))
    // },
    updateTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});
