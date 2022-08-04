const createGameHandler = async (event) => {
  event.preventDefault(); 
  // console.log("test")
  // /* const response = */ await fetch('/api/game', {
  //   method: 'GET'
  // });
  //  if (response.ok) {
  //    document.location.replace('/api/game')
  //  } else {
  //    alert(response.statusText)
  //  }
  console.log("test")
  // document.location.replace('/create');
}

const joinGameHandler = async (event) => {
  
  const gameID = document.querySelector('#game-id').value.trim();

  // if (gameID) {
  //   const response = await fetch(`/api/${gameId}`, {
  //     method: 'GET',
  //   })
  //   if (response.ok) {
  //     document.location.replace('/create');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  console.log(window.location)
  // document.location.replace('/create');
};

document
.querySelector('#join-game')
.addEventListener('click', joinGameHandler)

document
.querySelector('#create-game')
.addEventListener('click', createGameHandler)