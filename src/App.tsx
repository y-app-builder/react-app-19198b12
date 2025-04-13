import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('0');
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (value: string) => {
    if (result === '0') {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    setOperator(op);
    setResult(currentValue);
    setCurrentValue('0');
  };

  const handleEqualClick = () => {
    const currentValueNum = parseFloat(currentValue);
    const resultNum = parseFloat(result);

    let newResult = 0;
    switch (operator) {
      case '+':
        newResult = resultNum + currentValueNum;
        break;
      case '-':
        newResult = resultNum - currentValueNum;
        break;
      case '*':
        newResult = resultNum * currentValueNum;
        break;
      case '/':
        newResult = resultNum / currentValueNum;
        break;
      default:
        break;
    }

    setResult(newResult.toString());
    setCurrentValue('0');
    setOperator('');
  };

  const handleClearClick = () => {
    setResult('0');
    setCurrentValue('0');
    setOperator('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Calculator</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={currentValue || '0'}
          style={{ fontSize: '24px', width: '200px', textAlign: 'right', padding: '5px' }}
          readOnly
        />
        <span style={{ fontSize: '24px', marginLeft: '10px' }}>{operator}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px' }}>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('7')}
        >
          7
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('8')}
        >
          8
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('9')}
        >
          9
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#ff9500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleOperatorClick('/')}
        >
          /
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('4')}
        >
          4
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('5')}
        >
          5
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('6')}
        >
          6
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#ff9500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleOperatorClick('*')}
        >
          *
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('1')}
        >
          1
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('2')}
        >
          2
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('3')}
        >
          3
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#ff9500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleOperatorClick('-')}
        >
          -
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleNumberClick('0')}
        >
          0
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleClearClick}
        >
          C
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#ff9500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handleOperatorClick('+')}
        >
          +
        </button>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleEqualClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;