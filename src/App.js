import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((card, index) => {
    return (
      <>
        <Card key={card.id} {...card} /> {index !== data.length - 1 && <hr />}
      </>
    );
  });
  return (
    <div className="container">
      <Header />
      <div className="main">{cards}</div>
    </div>
  );
}

export default App;
