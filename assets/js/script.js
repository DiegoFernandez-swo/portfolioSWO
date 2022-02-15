const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav .menu');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

// //burger menu-toggle
// burger.addEventListener("click",() => {
//     menu.classList.toggle("active");    
// });

//close menu when link is clicked
navLink.forEach((link) => 
    link.addEventListener("click", () =>{
        menu.classList.remove("active");         
    })
);
$(document).ready(function(){
    //toggle burger menu
    $(burger).click(function(){
        $(menu).toggleClass("active");
        $('.burger-menu i').toggleClass("active");
    });
    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        nav: true,       
        // loop: true,
        // autoplayTimeOut: 2000,
        // autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});