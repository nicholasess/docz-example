import React, { Component } from "react";
import styled from "styled-components";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Button</Button>
      </Container>
    );
  }
}

export default App;
