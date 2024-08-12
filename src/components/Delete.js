import React from "react";
import styles from "./Delete.module.css";

function DeleteTodo({ onDelete }) {
  return (
    <button className={styles.delete} onClick={onDelete}>
      𖡎
    </button>
  );
}

export default DeleteTodo;
