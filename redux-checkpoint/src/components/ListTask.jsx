import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../features/todoSlice';

const ListTask = () => {
  const { tasks, filter } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true; // 'all'
  });

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('not'))}>Not Done</button>
      </div>
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
