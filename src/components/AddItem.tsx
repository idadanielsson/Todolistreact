import { ChangeEvent, FormEvent, useState } from "react"
import { Todo } from "../models/Todo"

interface IAddItemProps {
    addItem(t:Todo):void
}

export function AddItem(props:IAddItemProps) {
    const [item, setItem] = useState<Todo>({
        task:"",
        isFinished: false

    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem({...item,[e.target.name]: [e.target.value] });
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.addItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" onChange={handleChange} />
            <button>Lägg till</button>
        </form>
    )
}

