import React, { useRef, useContext } from "react";
import { TodosContext } from "./store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function sumbitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    context.addTodo(enteredText);
  }
  let context = useContext(TodosContext);
  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
      <label htmlFor="text">Text Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
