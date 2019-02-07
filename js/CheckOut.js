$('.add').click(function () {
  var n = Number($(this).parent().find('input').val())
  n = n + 1
  $(this).parent().find('input').val(n)
})
$('.cut').click(function () {
  var n = Number($(this).parent().find('input').val())
  n = n - 1
  if (n < 0) {
    n = 0
  }
  $(this).parent().find('input').val(n)
})
$('.ship').click(function () {
  $(this).siblings().stop().slideToggle(300)
})
$('.apply').click(function () {
  $('.apply-detail').stop().slideToggle(300)
})
$('.slide-input').focus(function () {
  $(this).css('border-color','#3bb18f')
})
$('.slide-input').blur(function () {
  $(this).css('border-color', '#959999')
  if ($(this).val().trim() == '') {
    $(this).next().css('display', 'block')
  } else {
    $(this).next().css('display', 'none')
  }
})
$('.check-inp-ok').focus(function () {
  $(this).css('border-color', '#3bb18f')
})
$('.check-inp-ok').blur(function () {
  $(this).css('border-color', '#959999')
  if ($(this).val().trim() == '') {
    $(this).next().css('display', 'block')
  } else {
    $(this).next().css('display', 'none')
  }
})
$('.proceed').click(function () {
  $('.main-con').css('display','none')
  $('.main-con2').css('display', 'block')
  $('.check-step>li:first>.no-check').css('opacity', '0')
  $('.check-step>li:first>.success').css('display','block')
  $('.check-step>li:nth-child(2)>.no-check').css({'background-color':'#3bb18f','color':'#fff'})
})
$('.bot-pro').click(function () {
  $('.main-con2').css('display', 'none')
  $('.main-con3').css('display', 'block')
  $('.check-step>li:nth-child(2)>.no-check').css('opacity', '0')
  $('.check-step>li:nth-child(2)>.success').css('display', 'block')
  $('.check-step>li:nth-child(3)>.no-check').css({ 'background-color': '#3bb18f', 'color': '#fff' })
})
// $('.pay-choose>li>a').click(function () {
//   $('#pay-way + label>span').css('border', '1px solid #000')
//   $('#pay-way + label>span>svg>path').css('fill', '#000')
//   $(this).find('input + label').find('span').css('border','1px solid #3bb18f')
//   $(this).find('input + label').find('span>svg>path').css('fill','#3bb18f')
// })