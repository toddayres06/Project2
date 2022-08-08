var homeButton = document.querySelector('#home')
function goHome() {
    document.location.assign('/')
}

homeButton.addEventListener('click', goHome)