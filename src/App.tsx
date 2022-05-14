import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { UserCard } from "./components/UserCard";
import { UserTypes } from "./types/api/user";

// const usercard = {
//   id: 1,
//   name: "jun",
//   email: "1234@aaa.com",
//   address: "ADDRESS"
// };
const user: User = {
  name: "jun"
  // hobbies: ["eiga", "ゲーム"]
};

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

  const [userTypes, setUserTypes] = useState<Array<UserTypes>>([]);
  const onClickFetchUser = () => {
    axios
      .get<Array<UserTypes>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserTypes(data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userTypes.map((user) => (
        <UserCard key={user.id} userTypes={userTypes} />
      ))}
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
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
