/*-----------------toggle style switcher------------*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style - switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*------------theme colors------------------*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

/*------------------theme light and dark mode-----------------*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun-o");
    dayNight.querySelector("i").classList.toggle("fa-moon-o");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun-o");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon-o")
    }
})
