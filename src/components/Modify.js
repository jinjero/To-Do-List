import React from "react";
import styles from "./Modify.module.css";

function ModifyTodo({ onModify }) {
  return (
    <button className={styles.modify} onClick={onModify}>
      ✎
    </button>
  );
}

export default ModifyTodo;
