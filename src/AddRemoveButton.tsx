import React from "react";

interface IAddRemoveButton {
  text: string;
  onClick: () => void;
}

class AddRemoveButton extends React.PureComponent<IAddRemoveButton> {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default AddRemoveButton;
