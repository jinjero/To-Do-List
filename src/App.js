import { useState } from "react";
import AddTodo from "./components/Add";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [currentText, setCurrentText] = useState("");

  const newArray = (todo) => {
    setTodos((current) => [
      { text: todo, completed: false, editing: false },
      ...current,
    ]);
  };

  const onAdd = () => {
    if (todo.trim()) {
      newArray(todo);
      setTodo("");
    }
    setIsClicked(true);
    setIsClicked(false);
  };

  const onToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const onDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const onModify = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].editing) {
      const updateTodo = todos.map((item, i) =>
        i === index ? { ...item, text: currentText, editing: false } : item
      );
      setTodos(updateTodo);
    } else {
      newTodos[index].editing = !newTodos[index].editing;
      setTodos(newTodos);
      setCurrentText(todos[index].text);
    }
  };

  return (
    <div className={styles.box}>
      <h1>To Do List</h1>
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        isClicked={isClicked}
        isHovered={isHovered}
        onAdd={onAdd}
        onHover={() => setIsHovered(true)}
        onLeave={() => setIsHovered(false)}
      />
      <hr></hr>
      <TodoList
        todos={todos}
        currentText={currentText}
        setCurrentText={setCurrentText}
        onToggle={onToggle}
        onDelete={onDelete}
        onModify={onModify}
      />
    </div>
  );
}

export default App;
