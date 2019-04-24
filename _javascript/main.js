document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello!');
});

// Burger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Script to hide/show content
function toggleMe(a){
  var e = document.getElementById(a);
  if(!e)return true;
  if(e.style.display=="none"){
    e.style.display="block";
    a.innerHTML = "+";
  }
  else{
    e.style.display="none";
    a.innerHTML = "-";
  }
  return true;
  }

  $("button").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });

//   if ($("button").text() == "+") { 
//     $("button").text("-"); 
// } else { 
//     $("button").text("+"); 
// };

 



// Scroll right & left col
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.left-col').css('left-col', - scroll / 4);
    $('.right-col').css('right-col', - scroll / 4);
});

