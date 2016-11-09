$(document).ready(function() {

  setInterval(function(){designRubberBand()}, 4000);

  hoverNoteimgpic();

});

function hoverNoteimgpic() {
  $('.notes-img-pic').hover(function(){
    //hover over picture-strip, then fade out
    $(this).fadeOut(700).finish(600);
  }, function(){
    $(this).fadeIn(700);
  });

}

function designRubberBand(){

  var randomNumber = Math.floor(Math.random() * $('.article-thumb').length) + 1

  $('.article-thumb').eq(randomNumber).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

/*
$(window).scroll(function() {
  notesScroll();

});


function notesScroll() {
  var wScroll = $(window).scrollTop();

  $('.picture-strip').css('background', 'center ' + wScroll + 'px');

}
*/
