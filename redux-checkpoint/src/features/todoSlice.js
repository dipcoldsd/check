import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  filter: 'all' // all, done, not
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        description: action.payload,
        isDone: false
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
