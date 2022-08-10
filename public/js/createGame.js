const createGameHandler = async (event) => {
  event.preventDefault(); 
  const response = await fetch('/api/game/', {
    method: 'GET'
  });
   if (response.ok) {
    let data = await response.json();
    const gameData = {player: 1, game_id: data.game_id}
    localStorage.setItem("gameData", JSON.stringify(gameData));
    document.location.replace('/create');
  } else {
     alert(response.statusText)
   }
}

const joinGameHandler = (event) => {
  event.preventDefault(); 
  const gameID = document.querySelector('#game-id').value.trim().toUpperCase();

  if (gameID) {
    fetch(`/api/game/${gameID}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
      if(!data.playing){
        const gameData = {player: 2, game_id: gameID}
      localStorage.setItem("gameData", JSON.stringify(gameData));
      document.location.replace('/create');
      }
      else{
        alert("game is already in progress")
      }
    })
  }
};

document
.querySelector('#join-game')
.addEventListener('click', joinGameHandler)

document
.querySelector('#create-game')
.addEventListener('click', createGameHandler)