import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    id: 1,
    title: "Some text",
    desc: "Lorem5  daw12dawd 13rfawd",
    completed: false,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    desc: "Lorf12em5  daw12321awdawd awd",
    completed: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor 1.",
    desc: "Lorem5  dwadwdawd awd",
    completed: false,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor3334",
    completed: true,
    desc: "L12f12forem5  dawddawdawd awd",
  },
];

const todoSilce = createSlice({
  name: "todos",
  initialState: {
    todos,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    completeTodo: (state, action) => {
      const foundTodo = state.todos.find((todo) => todo.id === action.payload);
      foundTodo.completed = !foundTodo.completed;
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload.id) return item;

        return {
          ...item,
          ...action.payload,
        };

      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo, updateTodo } =
  todoSilce.actions;

export default todoSilce.reducer;
