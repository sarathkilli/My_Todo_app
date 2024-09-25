import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "./actions";
import TodList from "./TodoList";
import './App.css'
const App=()=>{
  const dispatch=useDispatch();
  const [todoTitle,setTitle]=useState("")
  function handletodo(){
    if(todoTitle.trim()){
      const newtodo={title:todoTitle};
      dispatch(addtodo(newtodo));
      setTitle("")
    }
  }
  return (
    <div className="Box">
    <div className="Container">
      <h2>TODO APP</h2>
      <div className="topbox">
        <input type="text" placeholder="Add new Todo" value={todoTitle} onChange={e=>setTitle(e.target.value)}></input>
        <button className="btn" onClick={()=>handletodo()}>ADD</button>
      </div>
      <TodList></TodList>
    </div>
    
    </div>
  )
}
export default App;