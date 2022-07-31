// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import image1 from "./airbnb/images/card1.jpg";
// import image2 from "./airbnb/images/card2.jpg";
// import image3 from "./airbnb/images/card3.png";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./airbnb/AirBnbNav";
import Main from "./airbnb/ArBNBmain";
import Card from "./airbnb/Cards";
import data from "./airbnb/abnbData";

function WhyReact() {
  const mapped = data.map((single, index) => {
    console.log(single.img);
    return <Card item={single} />;
  });
  return (
    <div>
      <Nav />
      <Main />
      <section className="cards-container">{mapped}</section>
    </div>
  );
}

ReactDOM.render(<WhyReact />, document.getElementById("root"));
