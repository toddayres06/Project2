const playerPinger = setInterval(isPlayer1Turn, 1000);

function isPlayer1Turn() {
  const options = { method: "GET" };

  fetch(`http://localhost:3001/api/game/1`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.player1turn) {
        console.log("It's player 1's turn now!");
      } else {
        console.log(`It's player 2's turn now`)
      }
    })

    .catch((err) => console.error(err));
}
