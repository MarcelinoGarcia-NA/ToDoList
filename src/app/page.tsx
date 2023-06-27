
"use client"
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import todo from "./types/todo"
import { useState } from "react";

export default function Home() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      text: 'Faxina em casa!',
      isActive: false,
    },
    {
      id: 2,
      text: 'Lavar o carro!',
      isActive: false,
    }
  ]);

  function create(text: string) {
    const newtoDoList: todo[] = [...toDoList, {
      id: Math.floor(Math.random() * 1000),
      text: text,
      isActive: true,
    },
    ]
    setToDoList(newtoDoList);
  }
  function remove(id: number) {
    const newtoDolist: todo[] = [...toDoList];
    const list = newtoDolist.filter(todo => (todo.id !== id ? todo : null));
    setToDoList(list);
  }
  function alter(id:number){
    const newtoDolist: todo[] = [...toDoList];
    newtoDolist.map(todo => (todo.id === id ? todo.isActive = !todo.isActive:todo ));
    setToDoList(newtoDolist);
  }

  return (
    <main>
      <h1>Lista de a fazeres</h1>
      <TodoForm addTodo={create} />
      <Todo todo={toDoList} remove={remove} alter={alter} />
    </main>
  )
}
