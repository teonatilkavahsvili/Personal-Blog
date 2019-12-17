// toggle menu
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav.main-navigation").toggleClass("expanded");
  });

  $('.scrollToTopButton').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});

// Scrolling Effect
$(window).on("scroll", function () {
  var st = Math.round($(window).scrollTop());

  if (st) {
    $('.main-navigation').addClass('black');
  } else {
    $('.main-navigation').removeClass('black');
  }

  var el = $('section.blog__posts');
  if(!el.length) return;
  var sectionPosition = Math.round(el.offset().top);
  var scrollPosition = st + window.innerHeight;

  if(scrollPosition < sectionPosition) {
    el.removeClass('visible');
  } else {
    el.addClass('visible');
  }


});

// slider position - responsive
function responsiveFunction(responsive) {
  if (responsive.matches) { // If media query matches
    $('.main-slider').css('top', $('.main-navigation').height());
    $('.main-slider').css('marginBottom', "90px");
  } else {
    $('.main-slider').css('top', 0);
    $('.main-slider').css('marginBottom', 0);
  }
}

var responsive = window.matchMedia("(max-width: 992px)")
responsiveFunction(responsive) // Call listener function at run time
responsive.addListener(responsiveFunction) // Attach listener function on state changes

//Add active class to the current menu item
var header = document.getElementById("main_menu");
var menuItems = document.getElementsByClassName("main_menu-item--link");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("main_menu-item--active");
    current[0].className = current[0].className.replace(" main_menu-item--active", "");
    this.className += " main_menu-item--active";
  });
}

//Owl Carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: false,
    dots: false,
    slideBy: 3,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });
});



  $(".popSubmit, .xx").click(function(){
    $(".popup").hide();
  });

$(".popSubmit, .xx").click(function(){
    var hideTime = new Date();
    localStorage.setItem('jolitip', hideTime.getTime());
    var curr = new Date();
    var day = ((((curr.getTime() - Number(localStorage.jolitip)) / 1000) / 60) / 60) / 24;
    if(localStorage.jolitip == undefined)
    {
        var hideTime = new Date();
        localStorage.setItem('jolitip', hideTime.getTime());
    }
    else
    {
        $('.popup').hide();
    }
});