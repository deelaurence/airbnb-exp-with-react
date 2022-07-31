// import "./App.css";
// import logo from "./logo.svg";
// function App() {
//   return (
//     <nav>
//       <img src={logo} alt="react logo" />
//       <h1>deverence</h1>
//       <ul>
//         <li>pricing</li>
//         <li>about us</li>
//         <li>contact</li>
//       </ul>
//     </nav>
//   );
// }

// // install react from machine

import React from "react";
import ReactDOM from "react-dom";

function WhyReact() {
  return (
    <div>
      <h1>why i love react</h1>
      <ol>
        <li>fast</li>
        <li>cool</li>
        <li>can bring money</li>
      </ol>
    </div>
  );
}

ReactDOM.render(WhyReact(), document.getElementById("root"));

export default App;
