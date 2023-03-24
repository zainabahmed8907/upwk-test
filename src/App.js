import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import PictureDetails from "./Screens/PictureDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="picture" element={<PictureDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
