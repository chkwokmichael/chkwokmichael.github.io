var sections = $('section'),
  nav = $('nav'),
  nav_height = nav.outerHeight();

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (!$(window).scrollTop()) {
      nav.find('.nav-item.active').removeClass('active');
    }

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.nav-item.active').removeClass('active');

      nav.find("li#nav-" + $(this).attr('id')).addClass('active');
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      nav.find('.nav-item.active').removeClass('active');

      nav.find("li#nav-contact").addClass('active');
    }
  });
});
// Sticky navbar
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass("fixed-top");
  } else {
    $('nav').removeClass("fixed-top");
  }

  // var lastDiv;
  // var thisDiv;
  // for (var i = 0; i < bottom.length; i++) {
  //   if ($(this).attr("id") === bottom[i]) {
  //     lastDiv = bottom[i];
  //     thisDiv = navItem[i];
  //   }
  // }
  // if ($(window).scrollTop() < lastDiv) {
  //   for (var j = 0; j < 5; j++) {
  //     if ($(".nav-item").attr("id") === thisDiv) {
  //       $(".nav-item #" + thisDiv).addClass("active");
  //     } else {
  //       $(".nav-item").removeClass("active");
  //     }
  //   }
  // }
})

// Welcome-title animation
$(function() {
  setTimeout($('.tag-line').removeClass("content-hidden"), 3000);
})

// $(document).ready shorthand
$(function() {
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).position().top + ($(this).outerHeight()/2);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }
    });
  });
});
