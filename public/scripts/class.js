// const player1 = new Character("",)
// const player2 = new character("",)

class characters {
  constructor(health) {
    this.health = health;
  }

  isAlive() {
    if (this.health > 0) {
      console.log("Character is Alive!");
    } else {
      console.log("You have died!");
    }
  }

   create() {
    fetch('/api/character', {
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

// make api call on back end post for API character request.body push to server

        

  // createcharascter function post fetch that pushes the characters information. Use "this".
  //
            // no idea

