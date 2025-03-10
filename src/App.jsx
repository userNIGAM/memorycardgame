import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
