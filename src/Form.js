import { useState,useEffect } from "react";

function Form(){
  const [toDo,setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange=(event)=>setToDo(event.target.value);
  const onSubmit=(event)=>{
    event.preventDefault();// href submit 등 새로고침만 동작 안함
    if(toDo===""){
      return;
    }
    setToDos((currentArray)=>[toDo,...currentArray]);
    setToDo("");
  };
  
    console.log(toDos);  
  
  return(
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text"/>
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default Form;