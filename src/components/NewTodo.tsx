import React, { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function sumbitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
  }
  return (
    <form onSubmit={sumbitHandler}>
      <label htmlFor="text">Text Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
