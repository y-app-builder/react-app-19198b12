import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p style={{ fontSize: '48px', marginBottom: '20px' }}>{count}</p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#ff0000', // Changed button color to red
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={incrementCount}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;