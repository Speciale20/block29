import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css"; // Import the CSS file for styling

const SinglePlayer = () => {
  const { id } = useParams(); // Get the player ID from the URL params
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players/${id}`
        );
        setPlayer(response.data.data);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  const { name, breed, imageUrl } = player;

  return (
    <div>
      <h2>{name}</h2>
      <div className="player-card">
        <img src={imageUrl} alt={name} className="card-image" />
        <div className="card-details">
          <h3>{name}</h3>
          <p>Breed: {breed}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
