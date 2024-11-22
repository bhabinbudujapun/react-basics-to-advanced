import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleUpdateClick = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleSaveClick = (id) => {
    dispatch(
      updateTodo({
        id,
        text: newText,
      })
    );
    setEditingId(null);
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  type="submit"
                  onClick={() => handleSaveClick(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md">
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div>
                  <button
                    onClick={() =>
                      handleUpdateClick(
                        dispatch(updateTodo({ id: todo.id, text: todo.text }))
                      )
                    }
                    className="text-white bg-red-500 border-0 m-1 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 m-1 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
