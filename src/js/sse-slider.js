// Generated by CoffeeScript 1.10.0
(function() {
  window.g = window.g || {};

  window.g.$sliderScope = {
    self: this,
    settings: {
      IntervalSec: 5
    },
    status: {
      currentShowingIndex: 0,
      totalImageNum: 0,
      LoadedBitmap: 0,
      intervalId: -1
    },
    fn: {
      loadImg: function(idx) {
        var loadingImg, url;
        console.log('Slider image #%d now loading...', idx);
        loadingImg = $('.sse-slider .slide')[idx];
        url = loadingImg.getAttribute('data-src');
        $(loadingImg).attr('style', 'background-image: url("' + url + '");');
        return $(loadingImg).removeAttr('data-src');
      },
      onload: function(idx) {
        console.log('Slider image #%d loaded!', idx);
        if (idx !== (window.g.$sliderScope.status.totalImageNum - 1)) {
          return window.g.$sliderScope.fn.loadImg(idx + 1);
        }
      },
      setRoundButtonActivated: function(idx) {
        var btn, j, len, ref, results;
        ref = $('.sse-slider--round-ctrl button');
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          btn = ref[j];
          if ($(btn).hasClass('sse-slider--activated')) {
            $(btn).removeClass('sse-slider--activated');
          }
          if ($(btn).index() === (idx + 1)) {
            results.push($(btn).addClass('sse-slider--activated'));
          } else {
            results.push(void 0);
          }
        }
        return results;
      },
      changeToSlide: function(idx) {
        var i, img, imgToShow, j, len, ref;
        console.log('Change to #' + idx + '...');
        window.g.$sliderScope.status.currentShowingIndex = idx;
        this.setRoundButtonActivated(idx);
        ref = $('.sse-slider div.slide');
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          img = ref[i];
          if (($(img).hasClass('is-show')) && (i !== idx)) {
            $(img).removeClass('is-show');
          }
        }
        imgToShow = $('.sse-slider > ul > li > .slide').eq(idx);
        if ($(imgToShow).attr('data-src')) {
          console.log('Image #' + idx + ' not loaded, now loading...');
          window.g.$sliderScope.fn.loadImg(idx);
        }
        return $(imgToShow).addClass('is-show');
      },
      changeToNext: function() {
        if (window.g.$sliderScope.status.currentShowingIndex + 1 === window.g.$sliderScope.status.totalImageNum) {
          window.g.$sliderScope.fn.changeToSlide(0);
          return null;
        }
        return window.g.$sliderScope.fn.changeToSlide(window.g.$sliderScope.status.currentShowingIndex + 1);
      },
      changeToPrev: function() {
        if (window.g.$sliderScope.status.currentShowingIndex - 1 === -1) {
          window.g.$sliderScope.fn.changeToSlide(window.g.$sliderScope.status.totalImageNum - 1);
          return null;
        }
        return window.g.$sliderScope.fn.changeToSlide(window.g.$sliderScope.status.currentShowingIndex - 1);
      }
    }
  };

  $(document).ready(function() {
    var btn, i, idx, img, j, k, l, len, len1, li, ref, ref1, ref2, roundCtrl;
    $('.sse-slider').append('<div class="sse-slider--indicator"> <div class="spinner"> <div class="spinner-container container1"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container2"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container3"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> </div> </div> <div class="sse-slider--control-next" id="id-slider-next"><button><i class="fa fa-angle-right"></i></button></div> <div class="sse-slider--control-prev" id="id-slider-prev"><button><i class="fa fa-angle-left"></i></button></div>');
    window.g.$sliderScope.status.totalImageNum = $('.sse-slider .slide').length;
    roundCtrl = '<div class="sse-slider--round-ctrl">';
    roundCtrl += '<a class="round-ctrl-arrow" id="id-slider-prev-ctrl"><i class="fa fa-angle-left"></i></a>';
    for (i = j = 0, ref = window.g.$sliderScope.status.totalImageNum - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      roundCtrl += '<button><i class="fa fa-circle"></i></button>';
    }
    roundCtrl += '<a class="round-ctrl-arrow" id="id-slider-next-ctrl"><i class="fa fa-angle-right"></i></a>';
    roundCtrl += '</div>';
    $('.sse-slider').append(roundCtrl);
    ref1 = $('.sse-slider li');
    for (k = 0, len = ref1.length; k < len; k++) {
      li = ref1[k];
      idx = $(li).index();
      img = $('.slide').eq(idx);
      $(img).attr('onload', 'window.g.$sliderScope.fn.onload(' + idx + ')');
    }
    window.g.$sliderScope.fn.onload(-1);
    window.g.$sliderScope.fn.changeToSlide(0);
    ref2 = $('.sse-slider--round-ctrl button');
    for (l = 0, len1 = ref2.length; l < len1; l++) {
      btn = ref2[l];
      $(btn).click(function() {
        i = $(this).index();
        window.g.$sliderScope.fn.changeToSlide(i - 1);
        clearInterval(window.g.$sliderScope.status.intervalId);
        return window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
      });
    }
    $('#id-slider-prev').click(function() {
      window.g.$sliderScope.fn.changeToPrev();
      clearInterval(window.g.$sliderScope.status.intervalId);
      return window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
    });
    $('#id-slider-prev-ctrl').click(function() {
      window.g.$sliderScope.fn.changeToPrev();
      clearInterval(window.g.$sliderScope.status.intervalId);
      return window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
    });
    $('#id-slider-next').click(function() {
      window.g.$sliderScope.fn.changeToNext();
      clearInterval(window.g.$sliderScope.status.intervalId);
      return window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
    });
    $('#id-slider-next-ctrl').click(function() {
      window.g.$sliderScope.fn.changeToNext();
      clearInterval(window.g.$sliderScope.status.intervalId);
      return window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
    });
    window.g.$sliderScope.status.intervalId = setInterval(window.g.$sliderScope.fn.changeToNext, window.g.$sliderScope.settings.IntervalSec * 1000);
    return $('.sse-slider').css('height', window.innerHeight + 'px');
  });

}).call(this);

//# sourceMappingURL=sse-slider.js.map
