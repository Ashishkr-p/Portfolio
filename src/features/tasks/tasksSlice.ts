import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type TasksState = {
  items: Task[];
};

const initialState: TasksState = {
  items: [
    { id: '1', title: 'Profile checkout bottlenecks', done: true },
    { id: '2', title: 'Implement payment fallback states', done: false }
  ]
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.items.unshift(action.payload);
      },
      prepare: (title: string) => ({
        payload: {
          id: nanoid(),
          title,
          done: false
        }
      })
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) task.done = !task.done;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
