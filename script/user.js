let dropdown = document.querySelector('.dropdown')
let formBtn = document.querySelector('#login-btn');
let bell = document.querySelector('#bell')
let notifi = document.querySelector('#notification')
bell.addEventListener('click', () => {
    notifi.classList.toggle('activate');
    dropdown.classList.remove('active')
}
)
//dropdown
formBtn.addEventListener('click', () => {
    dropdown.classList.toggle('active')
    notifi.classList.remove('activate');
})
window.onscroll = () => {
    dropdown.classList.remove('active');
    notifi.classList.remove('activate')
}