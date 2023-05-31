const dropMenu = document.querySelector('#drop-menu');

const dropMenuButton = document.querySelector('#menu-button');

dropMenuButton.addEventListener('click', () => {
    dropMenu.classList.toggle('hidden');
})

