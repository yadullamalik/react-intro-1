import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// const elem = React.createElement(
//   "button",
//   { onClick: () => alert("without JSX") },
//   "CLICK ME"
// );

// const elemwithJSX = <button onClick={() => alert("with JSX")}>Click Me</button>;

// function Button(props) {
//   return <button onClick={() => props?.handleClick()}>{props.title}</button>;
// }

// const MYAPP = React.createElement("div", {}, [
//   elem,
//   elemwithJSX,
//   Button({ title: "Button 1", handleClick: () => alert("1") }),
//   Button({ title: "Button 2", handleClick: () => alert("2") }),
//   Button({ title: "Button 3", handleClick: () => alert("3") }),
//   <div>
//     <Button handleClick={() => alert("JSX")} title="JSX" />
//   </div>,
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
