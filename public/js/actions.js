const attackHandler = function () {
    console.log('You attacked!')
};

const specialAttackHanler = function () {
    console.log('You did a special attack!')
}

const healHandler = function () {
    console.log('You healed yourself!')
}

document
.querySelector('#attack')
.addEventListener('click', attackHandler)

document
.querySelector('#special-attack')
.addEventListener('click', specialAttackHanler)

document
.querySelector('#heal')
.addEventListener('click', healHandler)