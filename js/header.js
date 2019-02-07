//header下的jquery
//nav下的jquery
//nav-left
$('.nav-left>li').mouseenter(function () {
  $(this).children().children().find('path').attr('fill', '#3bb18f')
})
$('.nav-left>li').mouseleave(function () {
  $(this).children().children().find('path').attr('fill', '#cccccc')
})
//country-money
$('header .country-money>li').mouseenter(function () {
  $(this).find('ul').css({'visibility':'visible','opacity':'1'})
})
$('header .country-money>li').mouseleave(function () {
  $(this).find('ul').delay(500).css({ 'visibility': 'hidden', 'opacity': '0' })
})
//help
$('.help>li:last-child').mouseenter(function () {
  $(this).find('ul').stop().fadeIn(300)
})
$('.help>li:last-child').mouseleave(function () {
  $(this).find('ul').stop().fadeOut(300)
})
//nav-right
$('.nav-right>li:first').mouseenter(function () {
  $(this).find('.shopping-list').stop().fadeIn(300)
})
$('.nav-right>li:first').mouseleave(function () {
  $(this).find('.shopping-list').stop().fadeOut(300)
})
$('.nav-right>li:last>a').click(function () {
  $('.search-detail').fadeToggle(300)
  $('.search-detail').toggleClass('change')
})
//fixbutton
$('.wrap>a').click(function () {
  $('html,body').animate({'scrollTop':'0'},1000)
})
$(window).scroll(function () {
  var y = $(window).scrollTop()
  if (y > 800) {
    $('.wrap > a').css({ 'transform': 'scale(1)'})
  } else {
    $('.wrap > a').css({ 'transform': 'scale(0)'})
  }
})
$('.wrap>a').mouseenter(function() {
  $(this).css({'background-color':'#3bb18f'})
})
$('.wrap>a').mouseleave(function () {
  $(this).css({ 'background-color':'rgba(0,0,0,0.8)' })
})

