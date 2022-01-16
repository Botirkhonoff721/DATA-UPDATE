import React from "react";
import "./App.css";
import SignIN from "./SignIN";
import SignUP from "./SignUP";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: false,
    };
  }
  render() {
    const onPass = () => {
      this.setState({ case: !this.state.case });
    };
    return <div>{this.state.case 
      ? <SignIN onClick={onPass} /> 
      : <SignUP onClick={onPass} />
      }</div>;
  }
}

export default App;
