import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h4>{todo.name}</h4>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        -
      </button>
      {/* <button type="button" onClick={() => console.log("hello")}>
        click
      </button> */}
    </div>
  );
};
export default Todo;
