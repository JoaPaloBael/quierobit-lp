let menuBtn = document.querySelector('#menuBtn');
console.log(menuBtn);

menuBtn.addEventListener('click', function () {
  function navBar() {
    let nav = document.getElementById("myTopnav");
    if (nav.className == "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }
  function opacity(){
    let opacidad = document.querySelector('.opacidad');
    if(opacidad.className == "opacidad"){
      opacidad.className += " paddingTop";
    } else  {
      opacidad.className = "opacidad";
    }
  }
  navBar();
  opacity();
})






