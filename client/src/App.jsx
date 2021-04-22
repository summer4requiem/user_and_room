import React from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="./" component={Join}></Route>
      <Route path="./" component={Chat}></Route>
    </BrowserRouter>
  );
};

export default App;
