import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    //console.log(todos);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        ></input>
        <button type="submit">Add</button>
      </form>
      {/* {console.log(todos)} */}
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
