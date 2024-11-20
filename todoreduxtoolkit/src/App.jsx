import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl text-white font-bold text-center mb-8 mt-2">
            Learn about ReduxToolKit
            <h2>Todo-App</h2>
          </h1>
          <AddTodo />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
