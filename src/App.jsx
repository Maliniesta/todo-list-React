import { useState } from "react";
import { nanoid } from "nanoid";
import ListeItem from "./components/ListeItem";

function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "tâche 1" },
    { id: nanoid(8), content: "tâche 2" },
    { id: nanoid(8), content: "tâche 3" },
  ]);
  const [showValidation, setValidation] = useState(false);

  const [todo, setTodo] = useState("");
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (todo === "") {
      setValidation(true);
      return;
    }
    setTodoList([...todoList, { id: nanoid(), content: todo }]);
    setTodo("");
    setValidation(false);
  }
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-6xl text-slate-400 mb-4">Liste des tâches</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-3xl text-slate-200">
            Ajouter une nouvelle tâche
          </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded bg-slate-200 py-1 px-1 text-2xl"
          />
          {showValidation && (
            <p className="text-red-400">Impossible d'ajouter une tâche vide</p>
          )}
          <button className="cursor-pointer mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">
              Pas de tâche a effectuer...
            </li>
          )}
          {todoList.length > 0 &&
            todoList.map((tache) => (
              <ListeItem
                key={tache.id}
                tacheData={tache}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
