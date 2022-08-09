var homeButton = document.querySelector('#home');
const winResult = document.querySelector('#win-result');
const lossResult = document.querySelector('#loss-result');

homeButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.location.replace('/')
});

const endGame = () => {
    const gameData = localStorage.getItem("gameData");
    const gameID = JSON.parse(gameData).game_id;
    const player = JSON.parse(gameData).player;
    fetch(`/api/game/${gameID}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
    if (data.winner != player) {
        winResult.setAttribute("style", "display: none;");
        lossResult.setAttribute("style", "display: block;");
    } else {
        winResult.setAttribute("style", "display: block;");
        lossResult.setAttribute("style", "display: none;");
    }
    })
}


endGame();  