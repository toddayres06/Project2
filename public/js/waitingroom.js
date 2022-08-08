const currentGame = document.querySelector('.current-game');

const currentGameData = localStorage.getItem("gameData")
const gameId = JSON.parse(currentGameData).game_id;
const getCurrentID = () => {
  // console.log(localStorage.getItem("gameID"))
  if (currentGameData) {
    currentGame.textContent = gameId;
  } else {
    currentGame.textContent = "Error";
  }
}

getCurrentID();

const pinger = setInterval(isPlaying, 2000);
console.log("is connected")
function isPlaying() {
  const options = { method: "GET" };

  fetch(`http://localhost:3001/api/game/${gameId}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.playing) {
        console.log("I can redirect when the waiting room is built");
        document.location.assign('/game')
      } else {
        console.log('Still waiting on player 2')
      }
    })
    .catch((err) => console.error(err));
}

