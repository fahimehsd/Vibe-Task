import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./types";

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.items.push(action.payload);
    },

    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
