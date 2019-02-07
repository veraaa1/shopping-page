//index下的main-lunbo的swiper
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  slidesPerView: 4,
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})
//main的jquery
//main-scale
$('.charactor').mouseenter(function () {
  $(this).children('img').css('transform','scale(1.1)')
})
$('.charactor').mouseleave(function () {
  $(this).children('img').css('transform', 'scale(1)')
})
//main-lunbo
$('.intro>a ').mouseenter(function () {
  $(this).find('.note').css('display','block')
})
$('.intro>a').mouseleave(function () {
  $(this).find('.note').css('display', 'none')
})
//main-blognews
$('.mengban').mouseenter(function () {
  $(this).children().eq(0).css('padding-top','258px')
  $(this).siblings().css('transform','scale(1)')
  $(this).children().eq(1).css('color','#3bb18f')
})
$('.mengban').mouseleave(function () {
  $(this).children().eq(0).css('padding-top', '316px')
  $(this).siblings().css('transform', 'scale(1.1)')
  $(this).children().eq(1).css('color', '#fff')
})
//main-shoes
$('.main-shoes>a:nth-child(1)').mouseenter(function () {
  $('.left').find('p').eq(1).css('color','#3bb18f')
})
$('.main-shoes>a:nth-child(1)').mouseleave(function () {
  $('.left').find('p').eq(1).css('color', '#000')
})
$('.main-shoes>a:nth-child(2)').mouseenter(function () {
  $('.right').find('p').eq(0).css('color', '#3bb18f')
})
$('.main-shoes>a:nth-child(2)').mouseleave(function () {
  $('.right').find('p').eq(0).css('color', '#000')
})
//main-good-list
$('.cart>li>a').mouseenter(function () {
  $(this).siblings().css('display','block')
})
$('.cart>li>a').mouseleave(function () {
  $(this).siblings().css('display', 'none')
})

 