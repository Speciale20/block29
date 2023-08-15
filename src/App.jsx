import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";

export default function App() {
  return (
    <>
      <div id="app-container">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
        </Routes>
        <h1>app</h1>
      </div>
    </>
  );
}
