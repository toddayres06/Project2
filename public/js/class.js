// const player2 = new character("",)
// const player1 = new Character(20)
// console.log(player1)

let id = 1;
class character{
  constructor(health) {
    this.gameID = id;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.dexterity = dexterity;
  }


  isAlive() {
    if (this.health > 0) {
      console.log("Character is Alive!");
    } else {
      console.log("You have died!");
    }
  }

   create() {
     console.log(this);
    fetch('/api/character/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(this),
        })
        .then((res) => res.json())
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
