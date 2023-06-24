
"use client"
import Todo from "./components/Todo"
import todo from "./types/todo"

const getList = () => {
    const toDoList:todo[] = [
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
    ]
    return toDoList;
};

export default async function Home() {
  const toDoList:todo[] = getList();
  return (
    <main>
      <h1>Lista de a fazeres</h1>
      <Todo props={toDoList}/>
    </main>
  )
}
