import { useState } from "react";

export const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [gmail, setGmail] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(text, phone, gmail);
    setText("");
    setPhone("");
    setGmail("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Add Name"
      />
      <input
        type="text"
        onChange={(e) => {
          setGmail(e.target.value);
        }}
        placeholder="Add Gmail"
      />
      <input
        type="text"
        placeholder="Add Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
