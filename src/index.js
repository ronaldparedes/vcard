import React from "react";
import { render } from "react-dom";
import StyledApp from "./styles";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <h2 className="mainTitle">VCard Creator</h2>
        <Form />
      </StyledApp>
    );
  }
}

render(<App />, document.getElementById("root"));
