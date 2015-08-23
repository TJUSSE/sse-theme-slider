# Set global object

window.g = window.g or {}

window.g.$sliderScope =
  self: this
  settings:
    IntervalSec: 2
  status:
    currentShowingIndex: 0
    totalImageNum: 0
    LoadedBitmap: 0
  fn:
    onload: (idx)->
      if idx isnt -1
        console.log 'Slider image #%d onload!', idx
      if idx isnt (window.g.$sliderScope.status.totalImageNum - 1)
        nextImg = $('.sse-slider img')[idx + 1]
        url = nextImg.getAttribute('data-src')
        $(nextImg).attr 'src', url


$slider = window.g.$sliderScope

$(document).ready ->
  $('.sse-slider').append('
      <div class="sse-slider--indicator">
        <div class="spinner">
          <div class="spinner-container container1">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="spinner-container container2">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="spinner-container container3">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
        </div>
      </div>

      <div class="sse-slider--control-next"><button><i class="fa fa-angle-right"></i></button></div>
      <div class="sse-slider--control-prev"><button><i class="fa fa-angle-left"></i></button></div>

      ')

  $slider.status.totalImageNum = $('.sse-slider img').length

  roundCtrl = '<div class="sse-slider--round-ctrl">'
  for i in [0..$slider.status.totalImageNum - 1]
    roundCtrl += '<button><i class="fa fa-circle"></i></button>'
  roundCtrl += '</div>'

  $('.sse-slider').append(roundCtrl)

  console.log 'Slides images num: %d', $slider.status.totalImageNum


  for li in $('.sse-slider li')
    idx = $(li).index()
    console.log $(li).index()
    img = $('.sse-slider img').eq(idx)
    $(img).attr 'onload', 'window.g.$sliderScope.fn.onload(' + idx + ')'

  window.g.$sliderScope.fn.onload(-1);