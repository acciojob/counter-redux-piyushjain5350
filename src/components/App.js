
import React from "react";
import './../styles/App.css';
import {useDispatch ,useSelector} from 'react-redux';
import { increment,decrement } from "../redux/action/counterAction";

const App = () => {
  const val=useSelector(state=>state.count);
  // console.log(val)
  const dispatch=useDispatch();

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )   
}

export default App
