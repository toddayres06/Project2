const gameData = localStorage.getItem("gameData");
const gameID = JSON.parse(gameData).game_id;
const player = JSON.parse(gameData).player;
const attackHandler = function () {
    // action("attack",player,gameID)
    console.log(`gameID: ${gameID} and player: ${player}`)
};

const heavyAttackHandler = function () {
    console.log('You did a special attack!')
}

const healHandler = function () {
    console.log('You healed yourself!')
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
    const playerActions = {action: action, player: playerNum, gameId: id}
    fetch(`/api/game/action/`, {
      method: "Post",
      body: JSON.stringify(playerActions)
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }