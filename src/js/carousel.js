import  $ from 'jquery';

$(function() {

  $('.').slick({
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });
});