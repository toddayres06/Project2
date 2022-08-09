var homeButton = document.querySelector('#home');

homeButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.location.replace('/')
});