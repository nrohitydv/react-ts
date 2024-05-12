import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  function sumbitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  }
  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
      <label htmlFor="text">Text Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
