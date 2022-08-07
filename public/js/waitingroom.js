const currentGame = document.querySelector('.current-game');

const getCurrentID = () => {
  // console.log(localStorage.getItem("gameID"))
  let currentGameID = localStorage.getItem("gameID")
  if (currentGameID) {
    currentGame.textContent = currentGameID.game_id;
  } else {
    currentGame.textContent = "Error";

  }
}

getCurrentID();
