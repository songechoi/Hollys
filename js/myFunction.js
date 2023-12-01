let myObj = {
  key01:fnWrap,
  key02:fnSlider,
  key03:fnCookie,
  key04:sliderAuto,
}

function sliderAuto(){
  let trVal = 0;
  setInterval(function(){      
    trVal -= 25;
    if(trVal<=-100){
      trVal=0
    }
    if(trVal == 0){
      resetActive($('.pagination span'));
      setActive($('.pagination span').eq(0));
    }else if(trVal == (-25)){
      resetActive($('.pagination span'));
      setActive($('.pagination span').eq(1));
    }else if(trVal == (-50)){
      resetActive($('.pagination span'));
      setActive($('.pagination span').eq(2));
    }else if(trVal == (-75)){
      resetActive($('.pagination span'));
      setActive($('.pagination span').eq(3));
    }
    $('.slider').css({
      transform:`translateX(${trVal}%)`,
    })
  },2000);
}
// 페이지네이션 만들기
function fnWrap(){
  $('.slider').wrap('<div class="slider-wrap"></div>');
  $('.slider-wrap').append('<div class="pagination"></div>');
  for(let idx=0; idx<=$('.slider').children('.img-box').length-1; idx++){
    $('.pagination').append(`<span>${idx}</span>`);
  }
  setActive($('.pagination span:first-child'));
}
function setActive(el){
  el.addClass('active');
}
function resetActive(el){
  el.removeClass('active');
}
// 콜백함수1
function callBack01(){
  let navDisplay = $('#nav').css('display');
  if(navDisplay == 'none'){
    fnClose($('.sub-nav'));
    font400($('.main-nav').children('li').children('a'));
  };
}
// 링크함수
function fnLink(add){
  location.href=`${add}`;
}
// 폰트 400
function font400(el){
  // $('.main-nav').children('li').children('a').css({
    el.css({
    fontWeight:'400',
  })
}
// 닫기함수
function fnClose(el){      
  el.stop().hide();
  // 1. 위의 자바스크립트
  // el.style.display='none';
}
// 쿠키함수
function fnCookie(){
  let popupValue = $.cookie('popup');
  if(popupValue=='no'){
    fnClose($('#popup'));
  }else{
    $('#popup').stop().show();
  };
}
function fnSlider(){
  let imgNum = $('.slider').children('.img-box').length;
  let winWidth = $(window).width();
  $('.slider').addClass('clearfix').css({
    width:`${winWidth * imgNum}px`,
  });    
  $('.slider').children('.img-box').css({
    width:`${winWidth}px`,
  })    
}
  