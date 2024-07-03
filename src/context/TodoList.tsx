import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="text-center text-xl mb-10">
      {state.map((item: TTodo) => (
        <p className={`cursor-pointer ${item.isCompleted ? 'line-through': ''}`} key={item.id} onClick={() => dispatch({ type: "taskComplete", payload: item.id })}>
          id: {item.id} and Title: {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
