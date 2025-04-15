export default function ListeItem({ tacheData, deleteTodo }) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
      <span>{tacheData.content}</span>
      <button
        onClick={() => deleteTodo(tacheData.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200 cursor-pointer"
      >
        X
      </button>
    </li>
  );
}
