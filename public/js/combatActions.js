function action(action) {
  const playerActions = {action: 'attack', player: '1', gameId: 'FI3I'}
  fetch(`/api/action/${action}`, {
    method: "Post",
    body: JSON.stringify(playerActions)
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

}








//player player1 will have 

// TELL SERVER PLAYER 1 WANTS TO DO AN ACTION

//Action:{‘heal’ or ‘attack’, which ever you want to do}
// Player:{‘1’ or ‘2’, which ever player is making the action}
//body: JSON.stringify(data),