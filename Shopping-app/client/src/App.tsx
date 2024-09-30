import './App.css';
import { useState } from 'react';

const Child = ({ state, action }: any) => {
  return (
    <button type="button" onClick={action}>
      {state}
    </button>
  );
};

const Child2 = ({ state }: any) => {
  return <button>{state}</button>;
};

function App() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const increase = () => setNumber(number + 1);

  const handleChange = () => {
    setNumber1((prev) => prev + 2);
    setNumber2((prev) => prev + 3);
  };

  return (
    <>
      <Child state={number} action={increase} />
      <Child2 state={number1} />
      <Child2 state={number2} />
      <button onClick={handleChange}>Change</button>
    </>
  );
}

export default App;
