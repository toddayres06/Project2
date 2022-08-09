var homeButton = document.querySelector('#home');

homeButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.location.replace('/')
});

const endGame = async () => {
    const gameData = localStorage.getItem("gameData");
    const gameID = JSON.parse(gameData).game_id;
    const player = JSON.parse(gameData).player;
    const result = await fetch(`/api/game/${gameID}`);
    const data = result.json()
    console.log(data.winner);
}

endGame();  