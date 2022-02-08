const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav .menu');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

//burger menu-toggle
burger.addEventListener("click",() => {
    menu.classList.toggle("active");    
});

//close menu when link is clicked
navLink.forEach((link) => 
    link.addEventListener("click", () =>{
        menu.classList.remove("active");
    })
);