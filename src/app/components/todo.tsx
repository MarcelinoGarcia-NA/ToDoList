import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export default function Todo({ props }: Params) {

    return (
        <div>
            {props.map((todo:Params)=>(
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button>CONCLUIDA</button>
                    <button>X</button>
                </div>
                ))}
        </div>
    );

}