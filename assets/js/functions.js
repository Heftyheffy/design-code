/*
$(document).ready(function() {

  setInterval(function(){designRubberBand()}, 4000);

});
*/

$(window).scroll(function() {
  notesScroll();

});


function notesScroll() {
  var wScroll = $(window).scrollTop();

  $('.picture-strip').css('background', 'center ' + wScroll + 'px');

}



function designRubberBand(){

  var randomNumber = Math.floor(Math.random() * $('.article-thumb').length) + 1

  $('.article-thumb').eq(randomNumber).addClass('is-emph')
    .siblings().removeClass('is-emph');
}
