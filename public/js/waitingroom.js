const currentGame = document.querySelector('.current-game');

const getCurrentID = () => {
  // console.log(localStorage.getItem("gameID"))
  let currentGameID = localStorage.getItem("gameID")
  if (currentGameID) {
    currentGame.textContent = currentGameID;
  } else {
    currentGame.textContent = "test";

  }
}

getCurrentID();
