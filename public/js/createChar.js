class Characters {
  constructor(health, strength, agility, dexterity) {
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.dexterity = dexterity;
  }
   create(playerID) {
    fetch(`/api/character/2/${playerID}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(this),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data); 
            //if 1 go to wait screen
            //if 2 go to game    
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

const agilityProgress = document.getElementById('agility-progress')
const agilityPrev = document.getElementById('agility-prev')
const agilityNext = document.getElementById('agility-next')
const agilityCircles = document.querySelectorAll('.agility-circle')

const luckProgress = document.getElementById('luck-progress')
const luckPrev = document.getElementById('luck-prev')
const luckNext = document.getElementById('luck-next')
const luckCircles = document.querySelectorAll('.luck-circle')

const createCharacter = document.getElementById('start-game')



let currentHealth = 1;
let currentStrength = 1;
let currentAgility = 1;
let currentLuck = 1;



const atMaxPoints = () => {
  let totalPoints = currentHealth + currentStrength + currentAgility + currentLuck;
  if (totalPoints >= 10 ){
    luckNext.disabled = true;
    agilityNext.disabled = true;
    strengthNext.disabled = true;
    healthNext.disabled = true;
  } else {
    luckNext.disabled = false;
    agilityNext.disabled = false;
    strengthNext.disabled = false;
    healthNext.disabled = false;
  }
}





healthNext.addEventListener('click', () => {
  increaseHealthStat()
  updateHealth()
  atMaxPoints()
})

healthPrev.addEventListener('click', () => {
  decreaseHealthStat()
  updateHealth()
  atMaxPoints()
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
})

strengthPrev.addEventListener('click', () => {
  decreaseStrengthStat()
  updateStrength()
  atMaxPoints()
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


agilityNext.addEventListener('click', () => {
  increaseAgilityStat()
  updateAgility()
  atMaxPoints()
})

agilityPrev.addEventListener('click', () => {
  decreaseAgilityStat()
  updateAgility()
  atMaxPoints()
})

// function to decrease Agility stat
const decreaseAgilityStat = () => {
  currentAgility--

  if(currentAgility < 1){
    currentAgility = 1
  }
}

// function to increase Agility stat
const increaseAgilityStat = () => {
  currentAgility++
  if(currentAgility > agilityCircles.length){
    currentAgility = agilityCircles.length
  }
}


// update health to the current stat level;
const updateAgility = () => {
  agilityCircles.forEach((circle, idx) => {
    if (idx < currentAgility) {
      circle.classList.add('agility-active')
    }else{
      circle.classList.remove('agility-active')
    }
  })

const actives = document.querySelectorAll('.agility-active')

agilityProgress.style.width = (actives.length - 1) / (agilityCircles.length - 1) * 100 + '%';

//button functionality
  if(currentAgility === 1){
    agilityPrev.disabled = true
  }else if (currentAgility === agilityCircles.length) {
    agilityNext.disabled = true
  }else{
    agilityPrev.disabled = false
    agilityNext.disabled = false
  }
  console.log("current agility: ", currentAgility)
}


luckNext.addEventListener('click', () => {
  increaseLuckStat()
  updateLuck()
  atMaxPoints()
})

luckPrev.addEventListener('click', () => {
  decreaseLuckStat()
  updateLuck()
  atMaxPoints()
})

// function to decrease luck stat
const decreaseLuckStat = () => {
  currentLuck--

  if(currentLuck < 1){
    currentLuck = 1
  }
}

// function to increase luck stat
const increaseLuckStat = () => {
  currentLuck++
  if(currentLuck > luckCircles.length){
    currentLuck = luckCircles.length
  }
}


// update luck to the current stat level;
const updateLuck = () => {
  luckCircles.forEach((circle, idx) => {
    if (idx < currentLuck) {
      circle.classList.add('luck-active')
    }else{
      circle.classList.remove('luck-active')
    }
  })

const actives = document.querySelectorAll('.luck-active')

luckProgress.style.width = (actives.length - 1) / (luckCircles.length - 1) * 100 + '%';

//button functionality
  if(currentLuck === 1){
    luckPrev.disabled = true
  }else if (currentLuck === luckCircles.length) {
    luckNext.disabled = true
  }else{
    luckPrev.disabled = false
    luckNext.disabled = false
  }
  console.log("current luck: ", currentLuck)
}

const url = window.location.href;
const playerNum = url.substring(url.length-1)

createCharacter.addEventListener('click', async () => {
  const currentCharacter = new Characters(currentHealth, currentStrength, currentAgility, currentLuck);
  currentCharacter.create(playerNum);
  // console.log(currentCharacter);
})

