import React from 'react';
import ReactDOM from 'react-dom/client';
const name = "Your name";
React.createElement("h1", {style:{textAlign: "center"}},name);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement("h1", { style: { textAlign: "center" } }, name)
);
//============================================================================
// import ReactDOM from 'react-dom';

// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

// ReactDOM.render(
// <div>
//     <h1>List of fruits</h1>
//     <ul>
//       { fruits.map((item) => (
//         <li>{ item }</li>
//       )) }
//     </ul>
//  </div>,
// document.getElementById(‘root’)
// );

//================================================================
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };

// setInterval(tick, 1000);

//============================================================================
// import ReactDOM from 'react-dom';

// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

// ReactDOM.render(
// <div>
//     <h4>Browser's details: {navigator.userAgent}</h4>
//     
// document.getElementById(‘root’)
// );
