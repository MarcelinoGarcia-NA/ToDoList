import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import todo from '../types/todo';


export default function todo({ props }: Params) {

    return (
        <div>
            {props.map((todo:todo)=>(
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button>CONCLUIDA</button>
                    <button>X</button>
                </div>
                ))}
        </div>
    );

}