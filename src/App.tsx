import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onCLickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        res.data.map((todo) => todo);
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onCLickFetchData}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
