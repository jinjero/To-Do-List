import React from "react";
import DeleteTodo from "./Delete";
import ModifyTodo from "./Modify";
import styles from "./TodoList.module.css";

function TodoList({
  todos,
  currentText,
  setCurrentText,
  onToggle,
  onDelete,
  onModify,
}) {
  return (
    <div className={styles.checkList}>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <input
              className={styles.checkInput}
              id={`chk-${index}`}
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggle(index)}
            ></input>
            <label htmlFor={`chk-${index}`}>
              {item.editing ? (
                <input
                  className={styles.edit}
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      onModify(index);
                    }
                  }}
                />
              ) : (
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    color: item.completed ? "#686868" : "#474747",
                  }}
                >
                  {item.text}
                </span>
              )}
            </label>
            <DeleteTodo onDelete={() => onDelete(index)} />
            <ModifyTodo onModify={() => onModify(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
