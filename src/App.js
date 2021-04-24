import React from "react";
import Navbar from "./components/Routes-Nav/Navbar";
import Routes from "./components/Routes-Nav/Routes";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const errors = useSelector((st) => st.errors);
  console.log(errors);
  return errors.length !== 0 ? (
    <b>something went wrong... try refreshing the page</b>
  ) : (
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
