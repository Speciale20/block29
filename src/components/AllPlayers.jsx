import fetchPlayers from "/src/API/index.js";
import React from "react";
import { useState, useEffect } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect((players) => {
    async function fetchPlayers() {
      const result = await fetchPlayers();
      setPlayers(result);
    }
  }, []);
  return (
    <>
      {players.map(() => {
        return (
          <>
            <div>
              <div key={player.id}></div>
              <h4>{player.name}</h4>
            </div>
            <div className="player-image">
              <img
                src={player.imageUrl}
                alt={`${player.name} - ${player.id}`}
              />
            </div>
          </>
        );
      })}
    </>
  );
}
