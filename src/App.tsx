import React from "react";
import "./App.scss";
import { CardBar } from "./components/CardBar";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Sidebar className="main-sidebar" />
      <CardBar className="main-cardbar" />
      <MainContent className="main-content" />
    </div>
  );
}

export default App;
