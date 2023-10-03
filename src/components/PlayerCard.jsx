import React from "react";
import PropTypes from "prop-types";
import "./App.css"; // Import the CSS file for styling

const PlayerCard = ({ player }) => {
  const { id, name, breed, imageUrl } = player;

  return (
    <div key={id} className="player-card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-details">
        <h3>{name}</h3>
        <p>Breed: {breed}</p>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerCard;
