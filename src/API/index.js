
//made a cohortName variable to replace "cohortName placeholder"
const cohortName = '2302-ACC-CT-WEB-PT-B';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
export default function index() {



  //fetches all players from the API
  const fetchPlayers = async () => {
    try {
      const response = await fetch('${APIURL}/players/');
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }
}
