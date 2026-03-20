import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todoSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      dispatch(addTask(description));
      setDescription('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
