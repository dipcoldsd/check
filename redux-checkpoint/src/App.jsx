import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>ToDo App with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
