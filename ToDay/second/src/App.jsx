// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from './Card'
import { useState } from "react";
import './App.css'

function App() {
  const [count , setCount]=useState(0);
  const CounterIncrement = ()=>{
    setCount(count+1);
  }
  const CounterDecrement = ()=>{
    setCount(count-1);
  }
	return (

    <>
    <div className="container">
      <div> <h1> {count}</h1></div>
      <div>
      <button  onClick={CounterIncrement}>Inrement</button>
      <button  onClick={CounterDecrement}>Decrement</button>
      </div>
      
    </div>
     
      
    </>
		
	);
}

export default App;
