import { useState } from "react";
import { styled } from "styled-components";

const LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px red;

`
export const TodoItem = ({ todo, setTodo, todos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [editableTodo, setEditableTodo] = useState("");

  const deleteHandler = (id) => {
    setTodo(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const changeHandler = (id) => {
    setTodo(
      todos.filter((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const saveHandler = (id) => {
    setIsEdit(!isEdit);
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editableTodo } : todo
      )
    );
  };

  const editHandler = (id) => {
    setEditId(id);
    setIsEdit(() => !isEdit);
    setEditableTodo(todos.find((todo) => todo.id === id).title);
  };

  return (
    <LI className="todo__item">
        <input
          className="todo-complite"
          onChange={() => changeHandler(todo.id)}
          type="checkbox"
          checked={todo.completed}
        />
        <div className="todo-text-wrap">
          {isEdit && todo.id === editId ? (
            <input
              className="todo-edit"
              type="text"
              onChange={(e) => setEditableTodo(e.target.value)}
              value={editableTodo}
            />
          ) : (
            <span
              className="todo-text"
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.title}
            </span>
          )}
        </div>

            <div>
            {isEdit && editId === todo.id ? (
          <button className="save-btn" onClick={() => saveHandler(todo.id)}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => editHandler(todo.id)}>Edit</button>
        )}
        <button className="delete-btn" onClick={() => deleteHandler(todo.id)}>
          Delete
        </button>
            </div>
    </LI>
  );
};
