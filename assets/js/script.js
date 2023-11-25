const appIcon = document.querySelector('.APPS');
const appMenu = document.querySelector('.APPSMENU');
const profileIcon = document.querySelector('.PROFILE');
const profileMenu = document.querySelector('.PROFILEMENU');
appIcon.addEventListener('click', () => {
    appMenu.classList.toggle('active');
    profileMenu.classList.remove('active');
});
profileIcon.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
    appMenu.classList.remove('active');
});
window.addEventListener('click', (e) => {
    if(!appIcon.contains(e.target)){
        appMenu.classList.remove('active');
    }
    if(!profileIcon.contains(e.target)){
        profileMenu.classList.remove('active');
    }
});

const searchbar = document.querySelector('.searchbar-input');
const searchbarInput = document.querySelector('.searchbar-input input');
const searchbtn = document.querySelector('.SEARCHBUTTON');
searchbarInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        window.location.href = `https://www.google.com.tr/search?q=${searchbarInput.value}`;
    }
});
searchbtn.addEventListener('click', () => {
    window.location.href = `https://www.google.com.tr/search?q=${searchbarInput.value}`;
});