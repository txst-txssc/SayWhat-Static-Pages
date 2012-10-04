$('document').ready(function() {

  $('#featured').orbit({
    animation: 'horizontal-slide',   // fade, horizontal-slide, vertical-slide, horizontal-push
    animationSpeed: 800,             // how fast animtions are
    timer: true,                    // true or false to have the timer
    advanceSpeed: 4000               // if timer is enabled, time between transitions 
  });

  $('.small').fadeIn('fast');

  $('.dropdown-toggle').dropdown();

});