import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    currentColor: "red",
  };

  nextColor = () => {
    if (this.state.currentColor === "red") {
      this.setState({ currentColor: "green" });
    } else if (this.state.currentColor === "green") {
      this.setState({ currentColor: "yellow" });
    } else {
      this.setState({ currentColor: "red" });
    }
  };

  render() {
    const lights = [{ color: "red" }, { color: "yellow" }, { color: "green" }];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {lights.map((light) => (
            <div
              key={light.color}
              className={
                this.state.currentColor === light.color
                  ? `circle ${light.color}`
                  : "circle black"
              }
            ></div>
          ))}
        </div>
        <button onClick={this.nextColor} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
