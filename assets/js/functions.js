$(function() {
  //designRubberBand();
  setInterval(function(){designRubberBand()}, 4000);
});

function designRubberBand(){
  var randomNumber = Math.floor(Math.random() * $('.article-thumb').length) + 1
  $('.article-thumb').eq(randomNumber).addClass('is-emph')
    .siblings().removeClass('is-emph');
}
