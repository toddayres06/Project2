var actionPrompt = document.querySelector('#action-prompt');
var attackBtn = document.querySelector('#attack')
var heavyBtn = document.querySelector('#heavy-attack')
var healBtn = document.querySelector('#heal')
var oppTurn = document.querySelector('#oppTurn')

function notMyTurn() {
  actionPrompt.setAttribute ('style', 'display:none')
  attackBtn.setAttribute ('style', 'display:none')
  heavyBtn.setAttribute ('style', 'display:none')
  healBtn.setAttribute ('style', 'display:none')
  oppTurn.setAttribute ('style', 'display:block')
}

notMyTurn();