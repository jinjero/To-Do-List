import React from "react";
import styles from "./Add.module.css";

function AddTodo({
  todo,
  setTodo,
  isClicked,
  isHovered,
  onAdd,
  onHover,
  onLeave,
}) {
  const handleChange = (event) => setTodo(event.target.value);

  return (
    <div className={styles.write}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={todo}
        type="input"
        placeholder="Write Your To Do"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onAdd();
          }
        }}
      />
      <button
        className={styles.btn}
        onClick={onAdd}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {isClicked || isHovered ? "★" : "☆"}
      </button>
    </div>
  );
}

export default AddTodo;
