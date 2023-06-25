import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useState } from "react";

export default function TodoForm({addTodo}:Params){
    const[text,setText]= useState('');

    const handlersubmit=async (e:any)=>{
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return(
        <div>
            <form onSubmit={handlersubmit}>
                <input 
                type="text" 
                value={text}
                onChange={(e)=>setText(e.target.value)}/>
                <button>ADD</button>
            </form>
        </div>    
    );

}