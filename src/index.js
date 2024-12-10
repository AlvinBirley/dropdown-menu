import './styles.css';

const getBurger = document.querySelector(".hamburger")

const lilBurgers = document.getElementsByClassName("lil-burger-divs");

getBurger.addEventListener('mouseover', function() {
   
  

    // Loop through all lilBurgers and change the background color
    for (let i = 0; i < lilBurgers.length; i++) {
      lilBurgers[i].style.backgroundColor = "white";
    }
  });