/*底部提示框Jquery*/
$('.footer-inner-bottom> .dialog-img:nth-child(2) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(2) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(2) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(2) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(3) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(3) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(3) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(3) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(4) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(4) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(4) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(4) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(5) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(5) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(5) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(5) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(6) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(6) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(6) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(6) .dialog').stop().fadeOut(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(7) img').mouseenter(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(7) .dialog ').stop().fadeIn(200)
})
$('.footer-inner-bottom> .dialog-img:nth-child(7) img').mouseleave(function () {
  $('.footer-inner-bottom>.dialog-img:nth-child(7) .dialog').stop().fadeOut(200)
})

//
$('.bot-left>li').mouseenter(function () {
  $(this).find('span').css('margin-top', '-50px')
})
$('.bot-left>li').mouseleave(function () {
  $(this).find('span').css('margin-top', '0')
  $(this).css('background', 'rgba(0,0,0,0)')
})
$('.bot-left>li:first').mouseenter(function () {
  $(this).siblings('background', 'rgba(0,0,0,0)')
  $(this).css('background', 'rgba(52,78,134,1)')
})
$('.bot-left>li:first').mouseleave(function () {
  $(this).css('background', 'rgba(52,78,134,0)')
})
$('.bot-left>li:nth-child(2)').mouseenter(function () {
  $(this).siblings('background', 'rgba(0,0,0,0)')
  $(this).css('background', 'rgba(0,154,213,1)')
})
$('.bot-left>li:nth-child(2)').mouseleave(function () {
  $(this).css('background', 'rgba(0,154,213,0)')
})
$('.bot-left>li:nth-child(3)').mouseenter(function () {
  $(this).siblings('background', 'rgba(0,0,0,0)')
  $(this).css('background', 'rgba(56,101,137,1)')
})
$('.bot-left>li:nth-child(3)').mouseleave(function () {
  $(this).css('background', 'rgba(56,101,137,0)')
})
$('.bot-left>li:nth-child(4)').mouseenter(function () {
  $(this).siblings('background', 'rgba(0,0,0,0)')
  $(this).css('background', 'rgba(215,51,37,1)')
})
$('.bot-left>li:nth-child(4)').mouseleave(function () {
  $(this).css('background', 'rgba(215,51,37,0)')
})
$('.bot-left>li:nth-child(5)').mouseenter(function () {
  $(this).siblings('background', 'rgba(0,0,0,0)')
  $(this).css('background', 'rgba(12,101,144, 1)')
})
$('.bot-left>li:nth-child(5)').mouseleave(function () {
  $(this).css('background', 'rgba(12,101,144, 0)')
})
//input
$('footer .country-money>li').click(function (event) {
  $(this).find('ul').stop().toggle()
  console.log(1);
  
  event.stopPropagation()
})
$('footer').click(function () {
  console.log(2);
  
  $('.bot-money').css('display','none')
  $('.bot-country').css('display', 'none')
})