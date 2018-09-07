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

// Script to hide/show content TO SIMPLIFY
$( "#more" ).click(function() {
  $( "#collapse" ).toggle( "slow", function() {
    // Animation complete.
  }); 
 if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more2" ).click(function() {
  $( "#collapse2" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more3" ).click(function() {
  $( "#collapse3" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more4" ).click(function() {
  $( "#collapse4" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more5" ).click(function() {
  $( "#collapse5" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more6" ).click(function() {
  $( "#collapse6" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more7" ).click(function() {
  $( "#collapse7" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more8" ).click(function() {
  $( "#collapse8" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});

$( "#more9" ).click(function() {
  $( "#collapse9" ).toggle( "slow", function() {
    // Animation complete.
  });
  if ($(this).text() == "+") { 
      $(this).text("-"); 
  } else { 
      $(this).text("+"); 
  }; 
});


// Scroll right & left col
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.left-col').css('left-col', - scroll / 4);
    $('.right-col').css('right-col', - scroll / 4);
});
