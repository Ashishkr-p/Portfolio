'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trash2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addTask, removeTask, toggleTask } from '@/features/tasks/tasksSlice';

export function TaskManagerDemo() {
  const [value, setValue] = useState('');
  const tasks = useAppSelector((state) => state.tasks.items);
  const dispatch = useAppDispatch();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = value.trim();
    if (!next) return;
    dispatch(addTask(next));
    setValue('');
  };

  return (
    <div className="card-base space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Redux Toolkit Demo: Task Manager</h3>
        <p className="mt-1 text-sm text-muted">A lightweight module showing typed slices, actions, and global state updates.</p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a task"
          className="h-11 flex-1 rounded-xl border border-border bg-transparent px-3 outline-none ring-primary/30 focus:ring-2"
        />
        <button className="h-11 rounded-xl bg-primary px-5 font-medium text-white hover:opacity-95">Add Task</button>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            layout
            className="flex items-center justify-between rounded-xl border border-border p-3"
            whileHover={{ scale: 1.01 }}
          >
            <button className="flex items-center gap-2 text-left" onClick={() => dispatch(toggleTask(task.id))}>
              <CheckCircle2 className={`h-4 w-4 ${task.done ? 'text-emerald-500' : 'text-muted'}`} />
              <span className={task.done ? 'line-through text-muted' : ''}>{task.title}</span>
            </button>
            <button onClick={() => dispatch(removeTask(task.id))} aria-label="Delete task" className="text-muted hover:text-red-500">
              <Trash2 className="h-4 w-4" />
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
