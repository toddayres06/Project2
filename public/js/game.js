let firstLoad = true;
// local storage variables
const gameData = localStorage.getItem("gameData");
const gameID = JSON.parse(gameData).game_id;
const player = JSON.parse(gameData).player;

// action button variables
var attackBtn = document.querySelector('#attack')
var heavyBtn = document.querySelector('#heavy-attack')
var healBtn = document.querySelector('#heal')
//message variables

const opponentHealth = document.querySelector('.opponent-health');
const userHealth = document.querySelector('.user-health');
const text = document.querySelector('.all-text');



var oppTurn = document.querySelector('#oppTurn')

//functions to call actions
const attackHandler = function () {
    action("attack",player,gameID)
    notTurn()
};

const heavyAttackHandler = function () {

    action("heavy",player,gameID)


    notTurn()
}

const healHandler = function () {
    action("heal",player,gameID)
    notTurn()
}


//event listeners for actions
document
.querySelector('#attack')
.addEventListener('click', attackHandler)

document
.querySelector('#heavy-attack')
.addEventListener('click', heavyAttackHandler)

document
.querySelector('#heal')
.addEventListener('click', healHandler)

// function for doing the selected action(affects database)
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


    //function to check game status from data base   
  function gameStatus() {
    fetch(`/api/game/${gameID}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        if(data.winner){
            notTurn();
            setTimeout(() => {document.location.assign('/gameOver')}, 1000);
            // document.location.assign('/gameOver')
            return;
        }
        // console.log(data)
        if(player == 1){
            if(firstLoad){
                let yourHealth = document.querySelector('.your-health')
                let oppHealth = document.querySelector('.opp-health')

                yourHealth.dataset.total = data.player1.health
                yourHealth.dataset.value = data.player1.health

                oppHealth.dataset.total = data.player2.health
                oppHealth.dataset.value = data.player2.health
                firstLoad = false
            }
            changeHealth(data.player1.health,'you')
            changeHealth(data.player2.health,'opp')
        }
        if(player == 2){
            if(firstLoad){
                let yourHealth = document.querySelector('.your-health')
                let oppHealth = document.querySelector('.opp-health')

                yourHealth.dataset.total = data.player2.health
                yourHealth.dataset.value = data.player2.health

                oppHealth.dataset.total = data.player1.health
                oppHealth.dataset.value = data.player1.health
                firstLoad = false
            }
            changeHealth(data.player2.health,'you')
            changeHealth(data.player1.health,'opp')
        }
        if(player == 1 && data.player1turn || player == 2 && !data.player1turn){
            isTurn()
        }
        else{
            notTurn()
        }
    })
    .catch(error => console.log(error))
    
} 


setTimeout(() => {
    gameStatus()
    text.classList.remove("d-none");
    opponentHealth.classList.remove("d-none");
    userHealth.classList.remove("d-none");
    //checking status every 2 seconds
    const statusPing = setInterval(gameStatus,2000)
}, 5000);

//checking the game status when the page loads

//hiding buttons when its not your turn
function notTurn(){
    attackBtn.setAttribute ('style', 'display:none')
    heavyBtn.setAttribute ('style', 'display:none')
    healBtn.setAttribute ('style', 'display:none')
    oppTurn.setAttribute ('style', 'display:block')
}
//showing the buttons when it is you turn
function isTurn(){
        attackBtn.setAttribute ('style', 'display:inline')
        heavyBtn.setAttribute ('style', 'display:inline')
        healBtn.setAttribute ('style', 'display:inline')
        oppTurn.setAttribute ('style', 'display:none')
}



//code for adjusting health bar

function changeHealth(newHealth,who){
    let healthBar;
    if(who == "you"){
        healthBar = document.querySelector('.your-health')
    }else{healthBar = document.querySelector('.opp-health')}
    let total = healthBar.dataset.total
    let health = healthBar.dataset.value

    // let damage = health - newHealth
    // let damagePercent = damage/total

    let barLength = (newHealth/total) * 100
    if(who == "you"){
        document.querySelector('.your-bar').style.width = barLength + '%'
    }else{document.querySelector('.opp-bar').style.width = barLength + '%'}
    

    healthBar.dataset.value= newHealth
}


