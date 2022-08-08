const gameData = localStorage.getItem("gameData");
const gameID = JSON.parse(gameData).game_id;
const player = JSON.parse(gameData).player;

var actionPrompt = document.querySelector('#action-prompt');
var attackBtn = document.querySelector('#attack')
var heavyBtn = document.querySelector('#heavy-attack')
var healBtn = document.querySelector('#heal')
var oppTurn = document.querySelector('#oppTurn')

const attackHandler = function () {
    action("attack",player,gameID)
    notTurn()
};

const heavyAttackHandler = function () {
    console.log('You did a special attack!')
    notTurn()
}

const healHandler = function () {
    action("heal",player,gameID)
    notTurn()
}

document
.querySelector('#attack')
.addEventListener('click', attackHandler)

document
.querySelector('#heavy-attack')
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

gameStatus()
const statusPing = setInterval(gameStatus,2000)

  function gameStatus() {
    fetch(`/api/game/${gameID}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        if(player == 1 && data.player1turn || player == 2 && !data.player1turn){
            isTurn()
        }
        else{
            notTurn()
        }
    })
    .catch(error => console.log(error))
    
} 

function notTurn(){
    actionPrompt.setAttribute ('style', 'display:none')
    attackBtn.setAttribute ('style', 'display:none')
    heavyBtn.setAttribute ('style', 'display:none')
    healBtn.setAttribute ('style', 'display:none')
    oppTurn.setAttribute ('style', 'display:block')
}

function isTurn(){
        actionPrompt.setAttribute ('style', 'display:block')
        attackBtn.setAttribute ('style', 'display:inline')
        heavyBtn.setAttribute ('style', 'display:inline')
        healBtn.setAttribute ('style', 'display:inline')
        oppTurn.setAttribute ('style', 'display:none')
}

