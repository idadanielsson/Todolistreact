import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddItem } from "./AddItem";
import { TodoList } from "./TodoList";

export function TodoListApp() {
const [todoList, setTodoList] = useState<Todo[]>([]); 
const addItem = (t:Todo) => {
  setTodoList([...todoList, t]);
}

const deleteTask = (i:number) => {
   let remove= [...todoList];
   remove.splice(i, 1);
    setTodoList(remove);

    
  
}

return (
    <>
    <AddItem addItem={addItem}></AddItem>
    <TodoList todos={todoList} delete={deleteTask}></TodoList>
    </>
 
  )
}
