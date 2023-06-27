import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import todo from "../types/todo";

export default function Todo({ todo, remove, alter }: Params) {

    const handlerRemove = (id:number) => {
        remove(id);
    }
    const handlerAlter = (id:number) => {
        alter(id);
    }
    
    return (
        <div>
            {todo.map((todo: todo) => (
                <div key={todo.id}>
                    <p style={{ textDecoration: todo.isActive ? "line-through" : "" }}>{todo.text}</p>
                    <button onClick={()=>handlerAlter(todo.id)}>CONCLUIDA</button>
                    <button onClick={()=>handlerRemove(todo.id)}>X</button>
                </div>
            ))}
        </div>
    );

}