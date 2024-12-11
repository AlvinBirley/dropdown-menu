import './styles.css';

const getBurger = document.querySelector(".hamburger");
const lilBurgers = document.getElementsByClassName("lil-burger-divs");
const getDropDown = document.querySelector(".links");

let hoveringHamburger = false;
let hoveringLinks = false;

// Show the dropdown when hovering over the hamburger
getBurger.addEventListener('mouseover', function() {
    hoveringHamburger = true;
    // Change background color of lil burger divs
    for (let i = 0; i < lilBurgers.length; i++) {
        lilBurgers[i].style.backgroundColor = "white";
    }
    getDropDown.style.display = 'block';
});

// Function to hide dropdown
function dropDownGoUp() {
    for (let i = 0; i < lilBurgers.length; i++) {
        lilBurgers[i].style.backgroundColor = "black";
    }
    getDropDown.style.display = 'none';
}


getBurger.addEventListener('mouseleave', function() {
    hoveringHamburger = false;
   
    setTimeout(() => {
        if (!hoveringLinks) {
            dropDownGoUp();
        }
    }, 100); 
});


getDropDown.addEventListener('mouseover', function() {
    hoveringLinks = true;
});

getDropDown.addEventListener('mouseleave', function() {
    hoveringLinks = false;
   
    setTimeout(() => {
        if (!hoveringHamburger) {
            dropDownGoUp();
        }
    }, 100); 
});