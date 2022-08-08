var actionPrompt = document.querySelector('#action-prompt');
var attackBtn = document.querySelector('#attack')
var heavyBtn = document.querySelector('#heavy-attack')
var healBtn = document.querySelector('#heal')
var oppTurn = document.querySelector('#oppTurn')

function myTurn() {
  actionPrompt.setAttribute ('style', 'display:block')
  attackBtn.setAttribute ('style', 'display:inline')
  heavyBtn.setAttribute ('style', 'display:inline')
  healBtn.setAttribute ('style', 'display:inline')
  oppTurn.setAttribute ('style', 'display:none')
}

myTurn();