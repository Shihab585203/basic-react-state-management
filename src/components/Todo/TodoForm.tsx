import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";


const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: (Math.random() + 1).toString(36).substring(2, 11),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task</span>
                </label>
                <input
                  onBlur={(e) => setTask(e.target.value)}
                  type="text"
                  placeholder="Text"
                  name="todo"
                  id="todo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
