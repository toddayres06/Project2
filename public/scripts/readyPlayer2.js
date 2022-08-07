const pinger = setInterval(isPlaying, 1000);

function isPlaying() {
  const options = { method: "GET" };

  fetch(`http://localhost:3001/api/game/1`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.playing) {
        console.log("I can redirect when the waiting room is built");
        //redirect to game screen
      } else {
        console.log('Still waiting on player 2')
      }
    })

    .catch((err) => console.error(err));
}
