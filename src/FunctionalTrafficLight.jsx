import { useState } from "react";

export const FunctionalTrafficLight = () => {
  let [currentColor, changeColor] = useState("red");

  const applyColorChange = () => {
    if (currentColor === "red") {
      changeColor("green");
    } else if (currentColor === "yellow") {
      changeColor("red");
    } else {
      changeColor("yellow");
    }
  };

  if (currentColor === "red") {
    setTimeout(applyColorChange, 5000);
  } else if (currentColor === "yellow") {
    setTimeout(applyColorChange, 3000);
  } else {
    setTimeout(applyColorChange, 8000);
  }

  const lights = [{ color: "red" }, { color: "yellow" }, { color: "green" }];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {lights.map((light) => (
          <div
            key={light.color}
            className={
              currentColor === light.color
                ? `circle ${currentColor}`
                : "circle black"
            }
          ></div>
        ))}
      </div>
      <button className="next-state-button">Next State</button>
    </div>
  );
};
