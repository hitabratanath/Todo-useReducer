import { useReducer, useState } from "react";
import "./styles.css";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo"
};

function reducer(todos, action) {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  };
}
export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  console.log(todos);

  function handleSumit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  // console.log(todos);

  return (
    <div className="App">
      <form onSubmit={handleSumit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </form>
    </div>
  );
}
