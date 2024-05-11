import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
};

export default Todos;
