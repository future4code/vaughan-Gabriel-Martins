import React from "react";
import "./App.css";
import Input from "./Components/Input";
import MainContainer from "./Components/MainContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <MainContainer>
          <Input />
        </MainContainer>
      </>
    );
  }
}
export default App;
