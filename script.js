document.getElementById('burger-menu').addEventListener('click', function() {
    document.querySelector('.topnav').classList.toggle('menu-open');
});
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}