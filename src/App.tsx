import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Buy groceries"), new Todo("Learn React")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
