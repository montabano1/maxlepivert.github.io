$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .hide()
    .next()
    .show()
    .end()
    .appendTo('#slideshow');
},  5000);

$(document).ready(function(){
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("scrollstay");
var filters = document.getElementById("filters");
var grid = document.getElementById("stickygrid");
console.log(filters);
// Get the offset position of the navbar
var stickymenu = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickymenu) {

    navbar.classList.add("sticky");
    filters.classList.add("stickyfilter");
    grid.classList.add("stickygrid");
    var filterwidth = filters.offsetWidth
    console.log(filterwidth)
    grid.style.left = `${filterwidth}px`
  } else {
    navbar.classList.remove("sticky");
    filters.classList.remove("stickyfilter");
    grid.classList.remove("stickygrid");
    grid.style.left = "0px"
  }
}
})
