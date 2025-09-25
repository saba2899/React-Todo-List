import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

function List({ state, onDelete, onEdit, onToggle }) {
  return (
    <ul className="flex flex-col  gap-3  lg:min-w-[520px] w-[300px] mt-5">
      {state.map((todo, index) => (
        <li key={index} className="flex flex-col gap-2 text-xl dark:text-white">
          <div className="flex items-center justify-between gap-3 font-semibold">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="accent-[#6C63FF] w-5 h-5 border-gray-400"
              />
              <p className={todo.completed ? "line-through opacity-40" : ""}>
                {todo.text} #{index + 1}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <GoPencil
                className="hover:text-[#6C63FF] cursor-pointer"
                onClick={() => onEdit(todo.id)}
              />
              <GoTrash
                className="hover:text-[#E50000] cursor-pointer"
                onClick={() => onDelete(todo.id)}
              />
            </div>
          </div>

          <div className="w-full h-px bg-[#6C63FF] opacity-30"></div>
        </li>
      ))}
    </ul>
  );
}

export default List;
