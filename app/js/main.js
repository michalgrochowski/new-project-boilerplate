(function(){
  'use strict';
  // Service worker registeration

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js').then(function(registration) {
      console.log('ServiceWorker registration successful!');
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    }
  );
}

// Mobile menu scripts, showing hamburger etc.

$(".nav__link").on('click', function() {
  if (window.matchMedia("(max-width: 851px)").matches) {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list").removeClass("nav__list--expanded");
  } else {
    return;
  }
});

$(".nav__hamburger").on("click", function() {
  $(".nav__hamburger").hide();
  $(".nav__close-menu").show();
  $(".nav__list").addClass("nav__list--expanded").attr("aria-expanded", "true");
});

$(".nav__close-menu").on("click", function() {
  $(".nav__hamburger").show();
  $(".nav__close-menu").hide();
  $(".nav__list").removeClass("nav__list--expanded").attr("aria-expanded", "false");
});

$(".nav__link--start").on("click", function(){
  if (window.matchMedia("(max-width: 851px)").matches) {
    if ($(".nav__list").hasClass("nav__list--expanded")) {
      $(".nav__list").removeClass("nav__list--expanded");
      $(".nav__hamburger").show();
      $(".nav__close-menu").hide();
    } else {
      return;
    }
  } else {
    return;
  }
});

})();