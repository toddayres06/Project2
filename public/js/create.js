const createGameHandler = async (event) => {
  event.preventDefault(); 
  // console.log("test")
  // /* const response = */ await fetch('/api/game', {
  //   method: 'GET'
  // });
  //  if (response.ok) {
  //   document.location.replace('/create/1');
  // } else {
  //    alert(response.statusText)
  //  }
  console.log("test")
  document.location.replace('/create/1');

}

const joinGameHandler = async (event) => {
  const gameID = document.querySelector('#game-id').value.trim();

  // if (gameID) {
  //   const response = await fetch(`/api/${gameId}`, {
  //     method: 'GET',
  //   })
  //   if (response.ok) {
  //     document.location.replace('/create/2');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  console.log(gameID)
  // document.location.replace('/create/2');
};

document
.querySelector('#join-game')
.addEventListener('click', joinGameHandler)

document
.querySelector('#create-game')
.addEventListener('click', createGameHandler)