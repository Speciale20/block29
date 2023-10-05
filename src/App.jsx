import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPlayers from "./pages/AllPlayers";
import SinglePlayer from "./pages/SinglePlayer";
import NewPlayerForm from "./pages/NewPlayerForm";
import "./App.css";

const App = () => {
  const history = useHistory();

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route
            path="/newplayerform"
            element={<NewPlayerForm history={history} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
