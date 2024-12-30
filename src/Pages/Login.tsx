import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";
export const Login = () => {
  const [newUserName, setNewUserName] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1> this is Login Page {username}</h1>
      <input
        type="text"
        onChange={(even: ChangeEvent<HTMLInputElement>) => setNewUserName(even.target.value)}
      />
      <button onClick={() => dispatch(login({ username: newUserName }))}>
        login
      </button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};
