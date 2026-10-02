// pour aficher le menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// pour aficher la list
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// pour cacher la list quand on clique sur x
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// pour cacher le menu quand on clique sur un lien
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // quand on clique sur un lien on cache le menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// home swiper
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})