const currentGame = document.querySelector('.current-game');

const getCurrentID = () => {
  // console.log(localStorage.getItem("gameID"))
  const currentGameData = localStorage.getItem("gameID")
  if (currentGameData) {
    const gameId = JSON.parse(currentGameData).game_id;
    currentGame.textContent = gameId;
  } else {
    currentGame.textContent = "Error";
  }
}

getCurrentID();
