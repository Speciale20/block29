import fetchPlayers from "/src/API/index.js";
import React from "react";
import { useState, useEffect } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPlayers();
      setPlayers(data);
    }
  }, []);
  return (
    <>
      <h1>AllPlayers Test</h1>
    </>
  );
}
