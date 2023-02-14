import { Todo } from "../models/Todo";

interface ITodoProps {
    todos:Todo[]; 
    delete(i:number):void;
}



export function TodoList(props:ITodoProps) {

    const handleClick = (i:number) => {
        props.delete(i);
    }

    let html = props.todos.map((p,i) => {
        if (p.isFinished = false)  {
            
        }
        return(
            <div key={i}>
                <h4>{p.task}</h4>
                <button onClick={() => {
                    handleClick(i);
                    console.log(i)
                }}>
                    Ta bort
                </button>
            </div>
        )

    });

    return <>{html}</>;

        

    };  
