$(".owl-carousel-sponsors").owlCarousel({
  loop: true,
  autoplay: 2500,
  autoplayTimeout: 2000,
  // autoplaySpeed: 1000,
  animateIn: true,
  responsive: {
    350: { items: 2 },
    650: { items: 3 },
    900: { items: 4 },
    1200: { items: 5 },
    1500: { items: 6 },
    1750: { items: 7}
  },
});

$('.owl-carousel-testimonial').owlCarousel({
  loop: true,

  //Autoplay
  autoPlay : false,


  animateIn: true,
  responsive: {
    350: { items: 1 },
    650: { items: 1 },
    900: { items: 1 },
    1200: { items:1 },
    1500: { items: 1 },
    1750: { items: 1}
  },
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('inertia').classList.remove("flex-column-reverse");
    document.getElementById('swoosh').classList.remove("flex-column-reverse");
  } else {
    document.getElementById('inertia').classList.add("flex-column-reverse");
    document.getElementById('swoosh').classList.add("flex-column-reverse");
  }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)
