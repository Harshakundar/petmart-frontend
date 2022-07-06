/*let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');*/

let loginForm = document.querySelector('.login-form');
let formClose = document.querySelector('#form-close');

//let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
//gallary
/*let gal = document.querySelector('.slidegal')
let galopen = document.querySelectorAll('#gal')
let galclose = document.querySelector('#close')*/
//catagory
let slides = document.querySelectorAll('.slide')
let catagory = document.querySelectorAll('.rad')
//dark theme
//let mode=document.getElementById("mode");
//let body=document.getElementById('body')
//notificattion



window.onscroll = () => {
    /* searchBtn.classList.remove('fa-times');
     searchBar.classList.remove('active');*/
    //menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // gal.classList.remove('active');

}
//gallary
/*galopen.forEach(gal1 => {
    var curImg
    gal1.addEventListener('click', () => {
        gal.classList.add('active')
        document.getElementById('expandImg').src = gal1.src
    });
})
galclose.addEventListener('click', () => {
    gal.classList.remove('active')
});*/
/*menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
mode.addEventListener('click', () =>{
    
    body.classList.toggle('mode')
    mode.classList.toggle('fa-sun');
    
});*/
/*searchBtn.addEventListener('click', () =>{
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
});*/
/*formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});*/
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
});

var vidLinks = [
    document.querySelector(".src1").getAttribute("data-src"),
    document.querySelector(".src2").getAttribute("data-src"),
    document.querySelector(".src3").getAttribute("data-src"),
    document.querySelector(".src4").getAttribute("data-src"),
    document.querySelector(".src5").getAttribute("data-src")
];
let vidI = 0;
function changeVidAuto() {
    if (vidI === 5)
        vidI = 0
    else {
        document.querySelector('#video-slider').src = vidLinks[vidI];
        vidI += 1;
    }

}
setInterval(changeVidAuto, 7000);
/*
var myindex=0;
carasol()
function carasol() {
    var i;
     var x=document.getElementsByClassName("swiper-slide");
     for (let i = 0; i < x.length; i++) {
           x[i].style.display="none";
     }
     myindex++;
     if(myindex>x.length){
         myindex=1;
     }
     x[myindex-1].style.display="flex";
     setTimeout(carasol,3000)

};*/
let slideindex = 1
showslides(slideindex)
function currentSlide(n) {
    showslides(slideindex = n);
}
function showslides(n) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex - 1].style.display = "flex"
}