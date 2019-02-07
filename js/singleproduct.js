var ind = 0
var botImgInd = 0
$('.img-lunbo>li').click(function () {
  ind = $(this).index()
  $('.big-img').find('img').eq(ind).siblings().removeClass('changeing-img')
  $('.big-img').find('img').eq(ind).addClass('changeing-img')
  $(this).siblings().find('.img-upper').css('opacity', '1')
  $(this).find('.img-upper').css('opacity','0')
})
$('.next-button>a').click(function(){
  ind = ind + 1
  if(ind > 2){
    ind = 0
  }
  $('.big-img').find('img').eq(ind).siblings().removeClass('changeing-img')
  $('.big-img').find('img').eq(ind).addClass('changeing-img')
  $('.img-lunbo>li').eq(ind).siblings().find('.img-upper').css('opacity', '1')
  $('.img-lunbo>li').eq(ind).find('.img-upper').css('opacity', '0')
})
$('.pre-button>a').click(function () {
  ind = ind - 1
  if (ind < 0) {
    ind = 2
  }
  $('.big-img').find('img').eq(ind).siblings().removeClass('changeing-img')
  $('.big-img').find('img').eq(ind).addClass('changeing-img')
  $('.img-lunbo>li').eq(ind).siblings().find('.img-upper').css('opacity', '1')
  $('.img-lunbo>li').eq(ind).find('.img-upper').css('opacity', '0')
})
//main-blognews
$('.mengban').mouseenter(function () {
  $(this).children().eq(0).css('padding-top', '258px')
  $(this).siblings().css('transform', 'scale(1)')
  $(this).children().eq(1).css('color', '#3bb18f')
})
$('.mengban').mouseleave(function () {
  $(this).children().eq(0).css('padding-top', '316px')
  $(this).siblings().css('transform', 'scale(1.1)')
  $(this).children().eq(1).css('color', '#fff')
})
    var mySwiperA = new Swiper('.size-lun', {
      direction: 'horizontal', // 垂直切换选项
      slidesPerView: 3,
      loop: true, // 循环模式选项
      autoplay: true,
    })
var lenth = $('.detail-trend-in').length
$('.size-lun').mouseenter(function () {
  var ind = $(this).parents('.detail-trend-in').parent().index()
  for (var i = 0; i < lenth; i++) {
    if(ind === i){
    mySwiperA[i].autoplay.stop()
  }else{
      mySwiperA[i].autoplay.start()
      console.log(22);   
  }
  }
})
// $('html').click(function () {
//   for (var i = 0; i < lenth;i++){
//     mySwiperA[i].autoplay.start()
//   }
  
// })
    //
$('.ball>li').click(function () {
   botImgInd = $(this).index()
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).siblings().removeClass('changeing-img')
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).addClass('changeing-img')
  $(this).siblings().css('border', '1px solid rgba(0,0,0,0)')
  $(this).css('border','1px solid #eeeeee')
})
$('.pre-b').click(function() {
  botImgInd = botImgInd - 1
  if (botImgInd < 0 ) {
    botImgInd = 2
  }
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).siblings().removeClass('changeing-img')
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).addClass('changeing-img')
  $(this).next().next().find('.ball>li').eq(botImgInd).siblings().css('border', 'none')
  $(this).next().next().find('.ball>li').eq(botImgInd).css('border', '1px solid #eeeeee')
})
$('.next-b').click(function () {
  botImgInd = botImgInd + 1
  if (botImgInd > 2) {
    botImgInd = 0
  }
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).siblings().removeClass('changeing-img')
  $(this).parent().parent().parent().find('.img-trend>img').eq(botImgInd).addClass('changeing-img')
  $(this).next().next().find('.ball>li').eq(botImgInd).siblings().css('border', 'none')
  $(this).next().next().find('.ball>li').eq(botImgInd).css('border', '1px solid #eeeeee')
})

//
$('.color-choose>li').click(function () {
  $(this).siblings().css('border', '1px solid #fff')
  $(this).css('border','1px solid #959999')
})
$('.Size-choose>li').click(function () {
  $(this).siblings().children().css('color', '#000')
  $(this).children().css('color', '#3bb18f')
})
$('.add').click(function () {
  var n = Number($('.num>input').val())
  n = n + 1
  $('.num>input').val(n)
})
$('.cut').click(function () {
  var n = Number($('.num>input').val())
  n = n - 1
  if (n < 0) {
    n = 0
  }
  $('.num>input').val(n)
})
$('.list-a>a').click(function(){
  $(this).siblings().slideToggle(300)
})

function myFun() {
 
    if ($('.detail-trends>li:nth-child(2) .img-trend>img').eq(0).hasClass('changeing-img')) {
      $('.detail-trends>li:nth-child(2) .img-trend>img').eq(0).removeClass('changeing-img')
      $('.detail-trends>li:nth-child(2) .img-trend>img').eq(1).addClass('changeing-img')
    }else{
      $('.detail-trends>li:nth-child(2) .img-trend>img').eq(1).removeClass('changeing-img')
      $('.detail-trends>li:nth-child(2) .img-trend>img').eq(0).addClass('changeing-img')
  }
  }
function myFun1() {

  if ($('.detail-trends>li:nth-child(3) .img-trend>img').eq(0).hasClass('changeing-img')) {
    $('.detail-trends>li:nth-child(3) .img-trend>img').eq(0).removeClass('changeing-img')
    $('.detail-trends>li:nth-child(3) .img-trend>img').eq(1).addClass('changeing-img')
  } else {
    $('.detail-trends>li:nth-child(3) .img-trend>img').eq(1).removeClass('changeing-img')
    $('.detail-trends>li:nth-child(3) .img-trend>img').eq(0).addClass('changeing-img')
  }
}

var looping = setInterval(myFun,3000)
var looping2 = setInterval(myFun1, 4000)

//
$('.lun>a ').mouseenter(function () {
  $(this).find('.note').css('display', 'block')
})
$('.lun>a').mouseleave(function () {
  $(this).find('.note').css('display', 'none')
})
//
$('.letter-button>a').click(function () {
  var indA = $(this).index()
  $('.mor-info-con>div').eq(indA).siblings().removeClass('more-info-change')
  $('.mor-info-con>div').eq(indA).addClass('more-info-change')
})