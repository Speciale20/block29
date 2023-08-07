import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import index from "./API/index";

export default function App() {
  return (
    <>
      <div id="app-container">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/Players" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
        </Routes>

        <h1>app test</h1>
      </div>
    </>
  );
}
