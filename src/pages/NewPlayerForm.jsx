import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "../App.css";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new player object
    const newPlayer = { name, breed, imageUrl };

    try {
      // Send a POST request to the API to add a new player
      await axios.post(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/players",
        newPlayer
      );

      // Redirect to the home page after successful submission
      window.location.href = "/";
    } catch (error) {
      console.error("Error adding new player:", error);
    }
  };

  return (
    <div>
      <h2>Add a New Player</h2>
      <form onSubmit={handleSubmit}>
        {}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

NewPlayerForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NewPlayerForm;
