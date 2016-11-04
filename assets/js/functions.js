//$(function(){});

//based on windows scrolling

$(window).scroll(function(){
  pictureScroll();
});

function pictureScroll(){
  var wScroll = $(window).scrollTop();

  console.log(wScroll);

  //$('.picture-strip').css('background-position', 'center -' + wScroll + 'px');
}
