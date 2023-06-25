
"use client"
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import todo from "./types/todo"
import { useState } from "react";

export default function Home() {
  const [toDoList,setToDoList] = useState([
    {
      id: 1,
      text: 'Faxina em casa!',
      isActive: true,
    },
    {
      id: 2,
      text: 'Lavar o carro!',
      isActive: true,
    }
  ]);

  function create(text:string){
    const newtoDoList:todo[]=[...toDoList,{
             id:Math.floor(Math.random() * 1000),
             text:text,
             isActive:true,
          },
    ]
     setToDoList(newtoDoList);
  }

  return (
    <main>
      <h1>Lista de a fazeres</h1>
      <TodoForm addTodo={create}/>
      <Todo props={toDoList}/>
    </main>
  )
}
