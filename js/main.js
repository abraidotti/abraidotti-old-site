console.log('main.js is hooked up.');

// gallery
var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// end gallery

$(document).ready(function(){


  //checks a cookie's value even if it doesn't exist yet
  if (Cookies.get("bannerShown") === "true") {
    // do nothing
  } else {
    $(".newUser-banner").show(200);
    console.log("New user banner shown.");
    // create the cookie and set it to true
    Cookies.set("bannerShown", "true");
  };
  
  //if user is new, user can hide banner
  $("#newUser-banner-btn").click(function(){
    console.log('New user banner hidden.');
    $(".newUser-banner").hide(200);
    Cookies.set("bannerShown", "false");
  });

  showSlides(slideIndex);

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }; // End if
  }); // end page scroll animation
}); // end document.ready function