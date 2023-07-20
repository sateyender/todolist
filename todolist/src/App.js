import React,{useState} from "react";
import './App.css';

function App(){
  const [todos,setTodos]=useState([]);
  const [newTodo, setNewTodo]=useState('');

  const handelAddTodo = () =>{
    if(newTodo.trim()!==''){
      setTodos([...todos,newTodo]);
      setNewTodo('');
    }
  };
  const handleDeleteTodo=(index)=>{
    const updateTodos=[...todos];
    updateTodos.splice(index,1);
    setTodos(updateTodos);
  };
  return(
    <div className="App">
      <h1>Todo List</h1>
    <div>
      <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}
      placeholder="Enter your todo.." />
      <button onClick={handelAddTodo}>Add</button>
    </div>
    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {todo}
          <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>

  );


}
export default App;