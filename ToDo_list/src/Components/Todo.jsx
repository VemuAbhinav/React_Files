import './CSS/Todo.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TodoItems from './TodoItems';


let count=0;
const Todo = () => {

    const [todos,setTodos]=useState([]);
    const inputRef=useRef(null);

    const add= ()=>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value="";
        localStorage.setItem("todos_count",count)
    }

    useEffect(()=>{
        
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
            
        }, 100);
    },[todos])

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count");
    },[])

  return (
    <div className='todo'>
        <div className="todo-header">To-Do list</div>
        <div className="todo-add">
            <input ref={inputRef} className='todo-input' type="text" placeholder='Add ur Task'/>
            <div onClick={()=>{add()}}className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item,index)=>{
                return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    </div>
    
  )
}

export default Todo