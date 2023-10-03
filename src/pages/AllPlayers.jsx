import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);
  const apiEndpoint =
    "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players";

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        console.log("API Response:", response.data);
        setPlayers(response.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, [apiEndpoint, triggerRender]); // Trigger the fetch when apiEndpoint or triggerRender changes

  useEffect(() => {
    // This will toggle triggerRender to force a re-render
    setTriggerRender((prev) => !prev);
  }, [players]); // Re-render whenever players change

  if (!Array.isArray(players) || players.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
