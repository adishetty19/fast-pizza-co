import { useState } from "react";
import Button from "../../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUserName } from "./userSlice";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const name = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleUsername(e) {
    e.preventDefault();
    dispatch(updateUserName(username));
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleUsername}
      className="flex flex-col items-center gap-4"
    >
      <p className="mb-4 font-mono text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Your full name"
        className="w-72 rounded-full border border-stone-300 px-4 py-3 text-sm font-mono focus:outline-none focus:ring focus:ring-yellow-400 md:w-96"
      />
      {username && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
      {name && (
        <div>
          <Button type="primary">Continue ordering, {name}</Button>
        </div>
      )}
    </form>
  );
}
