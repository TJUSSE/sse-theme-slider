# Set global object

window.g = window.g or {}

window.g.$sliderScope =
  settings:
    IntervalSec: 2

$slider = window.g.$sliderScope

$(document).ready ->
