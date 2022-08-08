

const attackHandler = function () {
    fetch('/api/game/action', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            player: 1,
            game_id: 123,
            action: attack,
        }),
    });
    console.log('You attacked!')
};

const heavyAttackHandler = function () {
    console.log('You did a special attack!')
}

const healHandler = function () {
    console.log('You healed yourself!')
}

document
.querySelector('#attack')
.addEventListener('click', attackHandler)

document
.querySelector('#heavy-attack')
.addEventListener('click', heavyAttackHandler)

document
.querySelector('#heal')
.addEventListener('click', healHandler)