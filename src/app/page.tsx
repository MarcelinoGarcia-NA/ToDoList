
"use client"


interface list{
    id:number,
    text: string,
    isActive: boolean
}

const getList = () => {
    const toDoList:list[]= [
      {
        id: 1,
        text: 'Faxina em casa!',
        isActive: true,
      },
      {
        id: 2,
        text: 'Lavar o crro!',
        isActive: true,
      }
    ]
    return toDoList;
};

export default async function Home() {
  const toDoList = getList();
  return (
    <main>
      <>Hello Word!</>
      {toDoList.map(todo=>(
          <div key={todo.id}>
              <p>{todo.text}</p>
          </div>
        ))}
    </main>
  )
}
