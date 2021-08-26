setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 500);

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $("select").niceSelect();
});

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Popup Video
$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
  disableOn: 100,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

$(document).ready(function () {
  var owl = $(".products");
  owl.owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    // margin: 10,
    touchDrag: true,
    mouseDrag: true,
    nav: true,
    dots: false,
    autoplaySpeed: 1200,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });
});

//featured card

$(document).ready(function () {
  var owl = $(".featured-seller");
  owl.owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    // margin: 10,
    touchDrag: true,
    mouseDrag: true,
    nav: true,
    dots: false,
    autoplaySpeed: 1200,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });
});
// featured Products

$(document).ready(function () {
  var owl = $(".featured-products");
  owl.owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    // margin: 10,
    touchDrag: true,
    mouseDrag: true,
    nav: true,
    dots: false,
    autoplaySpeed: 1200,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });
});
