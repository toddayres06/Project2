const gameData = localStorage.getItem("gameData");
const gameID = JSON.parse(gameData).game_id;
const player = JSON.parse(gameData).player;
const attackHandler = function () {
    action("attack",player,gameID)
};

const heavyAttackHandler = function () {
    console.log('You did a special attack!')
}

const healHandler = function () {
    action("heal",player,gameID)
}

document
.querySelector('#attack')
.addEventListener('click', attackHandler)

document
.querySelector('#special-attack')
.addEventListener('click', heavyAttackHandler)

document
.querySelector('#heal')
.addEventListener('click', healHandler)

function action(action,playerNum,id) {
    const playerActions = {action: action, player: playerNum, gameID: id}
    console.log(playerActions)
    fetch(`/api/game/action/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(playerActions),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

const statusPing = setInterval(gameStatus,2000)

  function gameStatus() {
    fetch(`/api/game/${gameID}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        if(player == 1 && data.player1turn || player == 2 && !data.player1turn){
            console.log("your turn")
        }
        else{console.log("not your turn")}
    })
    .catch(error => console.log(error))
    
} 

