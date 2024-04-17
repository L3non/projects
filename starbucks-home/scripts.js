function imgSlider(anything){
   document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
   const circle = document.querySelector('.circle');
   circle.style.background = color;
}

function toggleMenu(){
   var menuToggle = document.querySelector('.toggle');
   var navegation = document.querySelector('.navegation')
   menuToggle.classList.toggle('active')
   navegation.classList.toggle('active')
}