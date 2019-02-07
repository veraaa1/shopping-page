//.list下的jquery
$('.list>ul>li').mouseenter(function () {
  $(this).children('ul').stop().fadeIn(300)
  $(this).find('a').find('svg').css({ 'color': '#3bb18f', 'fill': 'currentcolor' })
})
$('.list>ul>li').mouseleave(function () {
  $(this).children('ul').stop().fadeOut(300)
})
$('.list>ul>li>ul>li').mouseenter(function () {
  $(this).css('background-color', '#eee')
})
$('.list>ul>li:nth-child(3)>ul>li').mouseenter(function () {
  $(this).css('background-color', '#fff')
})
$('.list>ul>li:nth-child(4)>ul>li').mouseenter(function () {
  $(this).css('background-color', '#fff')
})
$('.list>ul>li:nth-child(5)>ul>li').mouseenter(function () {
  $(this).css('background-color', '#fff')
})
$('.list>ul>li:nth-child(6)>ul>li').mouseenter(function () {
  $(this).css('background-color', '#fff')
})
$('.list>ul>li>ul>li').mouseleave(function () {
  $(this).css('background-color', '#fff')
})
$('.list>ul>li:nth-child(2)>ul>li').mouseenter(function () {
  $(this).find('.more-details').stop().fadeIn(300)
})
$('.list>ul>li:nth-child(2)>ul>li').mouseleave(function () {
  $(this).find('.more-details').stop().fadeOut(300)
})
$('.more-details>li').mouseenter(function () {
  $(this).css('background-color', '#eee')
})
$('.more-details>li').mouseleave(function () {
  $(this).css('background-color', '#fff')
})
//catalogue
$('.list>li:nth-child(6) a').mouseenter(function () {
  $('.show-catalogue').stop().fadeIn(200)
})
$('.list>li:nth-child(6)').mouseleave(function () {
  $('.show-catalogue').stop().fadeOut(200)
})