



//made a cohortName variable to replace "cohortName placeholder"
import AllPlayers from "../components/AllPlayers";

//fetches all players from the API
const fetchPlayers = async () => {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players');
    const result = await response.json();
    if (result.success && result.result && result.players) {
      return result.players;
    }
    else {
      console.error('Error fetching players:', result.error);
      return [];
    }
  } catch (error) {
    console.log('Error fetching players:', error);
    return [];
  }
}

export default fetchPlayers;