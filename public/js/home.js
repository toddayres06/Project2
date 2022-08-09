var homeButton = document.querySelector('#home');

homeButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.location.replace('/')
});

const endGame = async () => {
    const gameData = localStorage.getItem("gameData");
    const gameID = JSON.parse(gameData).game_id;
    const result = await fetch(`/api/game/${gameID}`);
    console.log(result);
  }
  
endGame();  