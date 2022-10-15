import React from "react";
import AddRemoveButton from "./AddRemoveButton";

interface ICounterState {
  count: number;
}

class Counter extends React.Component<{}, ICounterState> {
  state = {
    count: 0,
  };

  increaseCounter = () =>
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  decreaseCounter = () =>
    this.setState((prevState) => ({ count: prevState.count - 1 }));

  render() {
    return (
      <span>
        {this.state.count}
        <AddRemoveButton text="+" onClick={this.increaseCounter} />
        <AddRemoveButton text="-" onClick={this.decreaseCounter} />
      </span>
    );
  }
}

export default Counter;
