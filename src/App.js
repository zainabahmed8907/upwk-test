import React from "react";
import { Route, Router, Routes,} from "react-router-dom";
import Home from "./Screens/Home";
import PictureDetails from "./Screens/PictureDetails";


function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Home />
        <Router>
          <Routes>
            <Route  path="/picture-details" element={<PictureDetails />} />
          </Routes>
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
