import React from "react";
import Navbar from "./Routes-Nav/Navbar";
import Routes from "./Routes-Nav/Routes";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container fullwidth="md" fixed>
          <Routes />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
