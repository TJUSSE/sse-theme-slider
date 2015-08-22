# Set global object

window.g = window.g or {}

window.g.$sliderScope =
  settings:
    IntervalSec: 2

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

