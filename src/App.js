import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber]=useState(0);
  const [maximum, setMaximum]=useState(10);

  function increaseNumber(){
    if(number>maximum){
      alert("Number can't be greater than "+maximum);
      setNumber(maximum);
    }else{
      setNumber(number+1);
    }
  }

  function decreaseNumber(){
    if(number>0){
      setNumber(number-1);
    }else{
      alert("Number can't be less than 0");
      setNumber(0);
    }
  }

  function handleMaximum(event){
    const value=parseInt(event.target.value);
    console.log(value);
    setMaximum(value);
    
  }

  return (
    <div className="App">
      <p>Enter the limit</p>
      <input type="number" value={maximum} onChange={handleMaximum} className='max-input' />
      <div className='number'>
        {number}
      </div>
      <button className="btn" onClick={increaseNumber}>Increment</button>
      <button className='btn' onClick={decreaseNumber}>Decrement</button>
      
    </div>
  );
}

export default App;
