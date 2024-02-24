import React,{useState} from 'react';
import './task2.css';

const Task2 = () => {
    
    const [color,setColor] = React.useState('white');
    
    const yes = () => {
        setColor('green')
    }
    
    const no = () => {
        setColor('red')
    }
    
    return (
    <div id="app">
      <h1 style={{color}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={yes}>Yes</button>
        </li>
        <li>
          <button onClick={no}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default Task2;
