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