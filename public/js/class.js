// const player2 = new character("",)
// const player1 = new Character(20)
// console.log(player1)

let id = 1;
class character{
  constructor(health, strength, agility, dexterity) {
    this.gameID = id;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.dexterity = dexterity;
  }

  create() {
  //  console.log(this);
  const gameData = localStorage.getItem("gameData");
  const gameID = JSON.parse(gameData).game_id;
  const player = JSON.parse(gameData).player;
  fetch(`/api/character/${player}/${gameID}`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify(this),
      })
      .then((res) => res.json(res))
      .then((data) => {
          console.log('Successful POST request:', data);     
      })
      .catch((error) => {
          console.error('Error in POST request:', error);
      });
  }
}

module.export = Characters

// make api call on back end post for API character request.body push to server

        

  // createcharascter function post fetch that pushes the characters information. Use "this".
