class Character{
  constructor(health, strength, medical, dexterity) {
    this.health = 18 + (parseInt(health *7));
    this.maxHealth = 18 + (parseInt(health *7));
    this.strength = parseInt(strength) +3;
    this.medical = parseInt(medical)+3;
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
const healthProgress = document.getElementById('health-progress')
const healthPrev = document.getElementById('health-prev')
const healthNext = document.getElementById('health-next')
const healthCircles = document.querySelectorAll('.health-circle')

const strengthProgress = document.getElementById('strength-progress')
const strengthPrev = document.getElementById('strength-prev')
const strengthNext = document.getElementById('strength-next')
const strengthCircles = document.querySelectorAll('.strength-circle')

const medicalProgress = document.getElementById('medical-progress')
const medicalPrev = document.getElementById('medical-prev')
const medicalNext = document.getElementById('medical-next')
const medicalCircles = document.querySelectorAll('.medical-circle')

const dexterityProgress = document.getElementById('dexterity-progress')
const dexterityPrev = document.getElementById('dexterity-prev')
const dexterityNext = document.getElementById('dexterity-next')
const dexterityCircles = document.querySelectorAll('.dexterity-circle')

const createCharacter = document.getElementById('start-game')
const pointsContainer = document.querySelector('.remaining-points')


let currentHealth = 1;
let currentStrength = 1;
let currentmedical = 1;
let currentdexterity = 1;
let totalPoints = 4;


const atMaxPoints = () => {
  totalPoints = currentHealth + currentStrength + currentmedical + currentdexterity;
  if (totalPoints >= 10 ){
    dexterityNext.disabled = true;
    medicalNext.disabled = true;
    strengthNext.disabled = true;
    healthNext.disabled = true;
  } else {
    dexterityNext.disabled = false;
    medicalNext.disabled = false;
    strengthNext.disabled = false;
    healthNext.disabled = false;
  }
}


const showPoints = (points) => {
  pointsContainer.innerHTML = `Remaining points: ${10 - points}`
}

showPoints(totalPoints);

healthNext.addEventListener('click', () => {
  increaseHealthStat()
  updateHealth()
  atMaxPoints()
  showPoints(totalPoints);
})

healthPrev.addEventListener('click', () => {
  decreaseHealthStat()
  updateHealth()
  atMaxPoints()
  showPoints(totalPoints);
})

// function to decrease health stat
const decreaseHealthStat = () => {
  currentHealth--

  if(currentHealth < 1){
    currentHealth = 1
  }
}

// function to increase health stat
const increaseHealthStat = () => {
  currentHealth++
  if(currentHealth > healthCircles.length){
    currentHealth = healthCircles.length
  }
}


// update health to the current stat level;
const updateHealth = () => {
  healthCircles.forEach((circle, idx) => {
    if (idx < currentHealth) {
      circle.classList.add('health-active')
    }else{
      circle.classList.remove('health-active')
    }
  })

const actives = document.querySelectorAll('.health-active')

healthProgress.style.width = (actives.length - 1) / (healthCircles.length - 1) * 100 + '%';

//button functionality
  if(currentHealth === 1 ){
    healthPrev.disabled = true
  }else if (currentHealth === healthCircles.length) {
    healthNext.disabled = true
  }else{
    healthPrev.disabled = false
    healthNext.disabled = false
  }
  console.log("current health: ", currentHealth)
}

strengthNext.addEventListener('click', () => {
  increaseStrengthStat()
  updateStrength()
  atMaxPoints()
  showPoints(totalPoints);
})

strengthPrev.addEventListener('click', () => {
  decreaseStrengthStat()
  updateStrength()
  atMaxPoints()
  showPoints(totalPoints);
})

// function to decrease Strength stat
const decreaseStrengthStat = () => {
  currentStrength--

  if(currentStrength < 1){
    currentStrength = 1
  }
}

// function to increase Strength stat
const increaseStrengthStat = () => {
  currentStrength++
  if(currentStrength > strengthCircles.length){
    currentStrength = strengthCircles.length
  }
}


// update health to the current stat level;
const updateStrength = () => {
  strengthCircles.forEach((circle, idx) => {
    if (idx < currentStrength) {
      circle.classList.add('strength-active')
    }else{
      circle.classList.remove('strength-active')
    }
  })

const actives = document.querySelectorAll('.strength-active')

strengthProgress.style.width = (actives.length - 1) / (strengthCircles.length - 1) * 100 + '%';

//button functionality
  if(currentStrength === 1){
    strengthPrev.disabled = true
  }else if (currentStrength === strengthCircles.length) {
    strengthNext.disabled = true
  }else{
    strengthPrev.disabled = false
    strengthNext.disabled = false
  }
  console.log("current strength: ", currentStrength)
}


medicalNext.addEventListener('click', () => {
  increasemedicalStat()
  updatemedical()
  atMaxPoints()
  showPoints(totalPoints);
})

medicalPrev.addEventListener('click', () => {
  decreasemedicalStat()
  updatemedical()
  atMaxPoints()
  showPoints(totalPoints);
})

// function to decrease medical stat
const decreasemedicalStat = () => {
  currentmedical--

  if(currentmedical < 1){
    currentmedical = 1
  }
}

// function to increase medical stat
const increasemedicalStat = () => {
  currentmedical++
  if(currentmedical > medicalCircles.length){
    currentmedical = medicalCircles.length
  }
}


// update health to the current stat level;
const updatemedical = () => {
  medicalCircles.forEach((circle, idx) => {
    if (idx < currentmedical) {
      circle.classList.add('medical-active')
    }else{
      circle.classList.remove('medical-active')
    }
  })

const actives = document.querySelectorAll('.medical-active')

medicalProgress.style.width = (actives.length - 1) / (medicalCircles.length - 1) * 100 + '%';

//button functionality
  if(currentmedical === 1){
    medicalPrev.disabled = true
  }else if (currentmedical === medicalCircles.length) {
    medicalNext.disabled = true
  }else{
    medicalPrev.disabled = false
    medicalNext.disabled = false
  }
  console.log("current medical: ", currentmedical)
}


dexterityNext.addEventListener('click', () => {
  increasedexterityStat()
  updatedexterity()
  atMaxPoints()
  showPoints(totalPoints);
})

dexterityPrev.addEventListener('click', () => {
  decreasedexterityStat()
  updatedexterity()
  atMaxPoints()
  showPoints(totalPoints);
})

// function to decrease dexterity stat
const decreasedexterityStat = () => {
  currentdexterity--

  if(currentdexterity < 1){
    currentdexterity = 1
  }
}

// function to increase dexterity stat
const increasedexterityStat = () => {
  currentdexterity++
  if(currentdexterity > dexterityCircles.length){
    currentdexterity = dexterityCircles.length
  }
}


// update dexterity to the current stat level;
const updatedexterity = () => {
  dexterityCircles.forEach((circle, idx) => {
    if (idx < currentdexterity) {
      circle.classList.add('dexterity-active')
    }else{
      circle.classList.remove('dexterity-active')
    }
  })

const actives = document.querySelectorAll('.dexterity-active')

dexterityProgress.style.width = (actives.length - 1) / (dexterityCircles.length - 1) * 100 + '%';

//button functionality
  if(currentdexterity === 1){
    dexterityPrev.disabled = true
  }else if (currentdexterity === dexterityCircles.length) {
    dexterityNext.disabled = true
  }else{
    dexterityPrev.disabled = false
    dexterityNext.disabled = false
  }
  console.log("current dexterity: ", currentdexterity)
}

const gameData = localStorage.getItem("gameData");
const gameID = JSON.parse(gameData).game_id;
const playerNum = JSON.parse(gameData).player;


createCharacter.addEventListener('click', async () => {
  const currentCharacter = new Character(currentHealth, currentStrength, currentmedical, currentdexterity);
  currentCharacter.create();
  // console.log("working")
  if(playerNum == '1') {
    // console.log(gameID)
    // console.log(currentCharacter);
    document.location.replace('/waiting')
  } else {
    // currentCharacter.create(playerNum, gameID);
    // console.log(gameID)
    // console.log(currentCharacter);
    document.location.replace('/game')
  }

})

