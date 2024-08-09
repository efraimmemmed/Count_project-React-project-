
import React, { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  return (
    <div className="App">
     <div className="container">
    
     <div className='main-box'>
     
     <div className='box-1'>
      <button className="minus"onClick={()=>setCount(count-1)}>-</button>
      <span>{count}</span>
      <button className="pilus" onClick={()=>setCount(count+1)}>+</button>
     </div>

    <div className='box-2'>
    <button className='red' onClick={()=>setCount(Math.sqrt(count))}>√</button>
    <button className='red' onClick={()=>setCount(count/2)}>/2</button>
    <button className='red' onClick={()=>setCount(count-2)}>-2</button>
    
      <button className='reset' onClick={()=>setCount(count == null)}>reset</button>

      <button className='green' onClick={()=>setCount(count+2)}>+2</button>
      <button className='green' onClick={()=>setCount(count*2)}>x2</button>
      <button className='green' onClick={()=>setCount(count*count)}>x²</button>
    </div>
     </div>
    </div>
    
    </div>
  );
}

export default App;
