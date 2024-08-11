import React, { useState } from "react";
import '../../styles/index.css'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
  const [activeColor, setActiveColor] = useState("red");

  return (
    <div className="traffic-light">
      <div
        className="light red"
        onClick={() => setActiveColor("red")}
      ></div>
      <div
        className="light yellow"
        onClick={() => setActiveColor("yellow")}
      ></div>
      <div
        className="light green"
        onClick={() => setActiveColor("green")}
      ></div>
    </div>
  );
};

export default Home;
