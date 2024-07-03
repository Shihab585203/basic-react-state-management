import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./context/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="">
        <TodoForm />
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
