import React from 'react';
import Display from './components/Display';
import DecreaseButton from './components/DecreaseButton';
import IncreaseButton from './components/IncreaseButton';




function App() {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount((prevValue) => prevValue + 1);
  const decrease = () =>
    setCount((prevValue) => (prevValue < 1 ? prevValue : prevValue - 1));

  return (
    <>
      <Display count={count} />
      <DecreaseButton decrease={decrease} />
      <IncreaseButton increase={increase} />
    </>
  );
}

export default App;
