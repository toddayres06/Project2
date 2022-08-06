const createGameHandler = async (event) => {
  event.preventDefault(); 
  const response = await fetch('/api/game', {
    method: 'GET'
  });
   if (response.ok) {
     let data = await response.json();
    localStorage.setItem("gameID", JSON.stringify(data.id));
    document.location.assign('/create/1');
  } else {
     alert(response.statusText)
   }

}

const joinGameHandler = async (event) => {
  event.preventDefault(); 
  const gameID = document.querySelector('#game-id').value.trim().toUpperCase();
  

  if (gameID) {
    const response = await fetch(`/api/game/${gameID}`, {
      method: 'GET',
    })
    if (response.ok) {
      document.location.assign('/create/2');
    } else {
      alert(response.statusText);
    }
  }
  // console.log(gameID)
  // document.location.assign('/create/2');
};

document
.querySelector('#join-game')
.addEventListener('click', joinGameHandler)

document
.querySelector('#create-game')
.addEventListener('click', createGameHandler)