import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../features/todoSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description: desc }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <input 
        type="checkbox" 
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      
      {isEditing ? (
        <input 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', marginLeft: '10px' }}>
          {task.description}
        </span>
      )}
      
      <button onClick={handleEdit} style={{ marginLeft: 'auto' }}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
